# Bookshelf API
Build using HapiJS Framework

## User Guide
dibangun dengan nodejs v14.17.0
clone project from [GitHub]
run npm install
run npm run start-dev

| Method  |       URL        |   Response   | Required Parameter? |   Deskripsi   |
| ------- |:----------------:|:------------:|:--------------------|:-------------:|
|  POST   |  /books          | JSON         | Yes [JSON Request]  | Menambahkan data buku |
|  GET    |  /books          | JSON         | No [Optional parameter name(string value), reading(boolean 0|1), finished(boolean 0|1) ] | Manampilkan semua data buku, jika ada parameter maka akan mengembalikan nilai sesuai dengan data yang ada pada parameter |
|  GET    |  /books/{bookId} | JSON         | Yes [bookId]  | Menampilkan data buku sesuai id yang dimasukkan |
|  PUT    |  /books/{bookId} | JSON         | Yes [bookId]  | Mengubah data buku sesuai `id` |
|  DELETE |  /books/{bookId} | JSON         | Yes [bookId]  | Menghapus data buku sesuai dengan `id` |

# Request Form
"name": string|required,
"year": number,
"author": string,
"summary": string,
"publisher": string,
"pageCount": number|>readPage,
"readPage": number|<pageCount,
"reading": boolean

Description
1. Menggunakan Hapi JS Framework.
2. Menggunakan eslint standard javascipt untuk gaya penulisan kode.
3. Menggunakan nodemon untuk menjalankan webserver.
4. Menggunakan nanoid untuk id buku.
