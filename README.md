# Bookshelf API
Build using HapiJS Framework

## User Guide
1. dibangun dengan nodejs v14.17.0
2. clone project from [GitHub]
3. run npm install
4. run npm run start-dev

| Method  |       URL        |   Response   | Required Parameter? |   Deskripsi   |
| ------- |:----------------:|:------------:|:--------------------|:-------------:|
|  POST   |  /books          | JSON         | Yes [JSON Request]  | Menambahkan data buku |
|  GET    |  /books          | JSON         | No [Optional parameter name(string value), reading(boolean 0|1), finished(boolean 0|1) ] | Manampilkan semua data buku, jika ada parameter maka akan mengembalikan nilai sesuai dengan data yang ada pada parameter |
|  GET    |  /books/{bookId} | JSON         | Yes [bookId]  | Menampilkan data buku sesuai id yang dimasukkan |
|  PUT    |  /books/{bookId} | JSON         | Yes [bookId]  | Mengubah data buku sesuai `id` |
|  DELETE |  /books/{bookId} | JSON         | Yes [bookId]  | Menghapus data buku sesuai dengan `id` |

# Request Form
1. "name": string|required,
2. "year": number,
3. "author": string,
4. "summary": string,
5. "publisher": string,
6. "pageCount": number|>readPage,
7. "readPage": number|<pageCount,
8. "reading": boolean

# Description
1. Menggunakan Hapi JS Framework.
2. Menggunakan eslint standard javascipt untuk gaya penulisan kode.
3. Menggunakan nodemon untuk menjalankan webserver.
4. Menggunakan nanoid untuk id buku.
5. Data buku disimpan masih menggunakan array.
