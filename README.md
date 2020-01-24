![files/ReactLogo.png](files/ReactLogo.png)

# React JS - Website Movies Menggunakan Redux, Axios, Auth0 dan Open API TV Maze

> Website Tentang Movie Menggunakan Redux, Axios dengan Open API TV Maze dan juga menggunakan autentifikasi login dengan Auth0

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)

### Dependencies yang digunakan:

1. auth0-js : ^9.12.1,
2. axios : ^0.19.1,
3. react : ^16.12.0,
4. react-dom : ^16.12.0,
5. react-redux : ^7.1.3,
6. react-responsive-carousel : ^3.1.51,
7. react-router-dom : ^5.1.2,
8. react-scripts : 3.3.0,
9. redux : ^4.0.5,
10. semantic-ui-css : ^2.4.1,
11. semantic-ui-react : ^0.88.2

### Installasi:

- Download atau clone repository
- Extract folder
- Buat Akun Auth0 (Opsional) Jika ingin menggunakan autentifikasi
- Ubah data callback di root:src/Auth/auth0-variables.js dengan data pada Auth0 yang didaftarkan
- Install dependencies : `npm install` atau `yarn install`
- Jalankan aplikasi : `npm start`

### Live Preview:

Link: [TV Movie](https://tv-movie.herokuapp.com/)

> Jika data dari Open API TV Maze tidak tampil maka pada browser harus dinonaktifkan dahulu Mix-Content agar API dapat tampil. Hal ini dikarenakan data dari Open API TV Maze menggunakan protokol HTTP. Berikut cara menonaktifkan Mix-Content [link](https://pearsonnacommunity.force.com/support/s/article/How-to-display-mixed-content-with-Google-Chrome-Internet-Explorer-or-Firefox-1408394589290)
