import { Elysia, t } from 'elysia' // Tambahkan 't' untuk validasi skema
import { cors } from '@elysiajs/cors'
import mysql from 'mysql2/promise'

// Konfigurasi Koneksi MySQL XAMPP
const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'tazeera-waitlist' 
})

const app = new Elysia()
    .use(cors())
    .get('/', () => 'Tazeera API is Running 🚀')
    
    // 1. Endpoint Ambil Data Styles
    .get('/api/styles', async () => {
        try {
            const [rows] = await db.execute('SELECT * FROM style');
            return rows;
        } catch (error) {
            return { success: false, error: "Gagal mengambil data" };
        }
    })
    
    // 2. Endpoint Simpan Email Waitlist (Updated)
    .post('/api/waitlist', async ({ body, set }) => {
        try {
            const { email } = body;

            // Validasi manual jika email kosong (meski sudah dicek skema)
            if (!email || !email.includes('@')) {
                set.status = 400; // Bad Request
                return { success: false, message: "Format email tidak valid." };
            }

            await db.execute('INSERT INTO waitlist (email) VALUES (?)', [email]);
            
            return { 
                success: true, 
                message: "Selamat! Kamu berhasil bergabung dalam waitlist." 
            };

        } catch (error: any) {
            // Cek jika email duplikat (Unique Constraint di SQL)
            if (error.code === 'ER_DUP_ENTRY') {
                set.status = 409; // Conflict
                return { success: false, message: "Email ini sudah terdaftar sebelumnya." };
            }

            set.status = 500;
            return { success: false, message: "Terjadi kesalahan pada server." };
        }
    }, {
        // Validasi Body menggunakan fitur bawaan Elysia (TypeBox)
        body: t.Object({
            email: t.String({
                format: 'email',
                error: 'Email tidak valid'
            })
        })
    })
    .listen(5000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)