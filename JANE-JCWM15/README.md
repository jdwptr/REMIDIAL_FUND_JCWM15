![purwadhika](https://dm2302files.storage.live.com/y4mXzhUZVMNL_p9tVgW1HqlEUJa6ppyVCfKnxxFC4x5nfuSs_-NnMTSOFdPq6MIGrxKEZW8uGWVreQ9awWZboO6NydIZpac87UZ48QL0Y40HZv-uJOAAqVADo9m_ZBZ5ThfKAaFnCabsFufrOnkmjwdWVsaFcPVmaha7sQOlW0jmQwbbEGmbVih8UC2ouXKKdRs?width=256&height=39&cropmode=none)

---
Sebelum anda mengerjakan soal ujian, pastikan anda memiliki akun **GitHub** dan ***software git*** sudah terinstall dilaptop. Anda dapat memastikan bahwa **git** sudah terinstall dilaptop anda dengan menjalankan perintah berikut ini diterminal atau ***cmd*** : ``` git --version ```. Jika muncul *versi git* maka komputer anda sudah terinstal *git*.

Soal ujian dapat anda temukan didalam repositori ini atau anda dapat melihatnya melalui *[link ini](https://github.com/alee0510/REMIDIAL_FUND_JCWM15/blob/main/soal_remidial_FUND_JCWM15.pdf)*

Sebelum mengerjakan ujian, bacalah dengan seksama aturan serta panduan dalam mengerjakan soal-soal ujian berikut ini.

## Term & Condition
- ujian akan dilaksanakan selama 3 jam 20 menit
    - 10 menit untuk *setup*
    - 3 jam mengerjakan soal
    - 10 menit *pull request*
- selama mengerjakan ujian, siswa wajib **men-share seluruh screen** di **zoom** (khusus untuk kelas online) sampai ujian selesai
- dilarang bekerjasama dalam mengerjakan soal ujian
- dilarang memberikan jawaban atau meminta jawaban dari teman atau pihak lain
- jika ada pertanyaan mengenai ujian dan soal, langsung tanyakan kepada operasional selaku pengawas ujian atau *lecturer* yang mengawasi
- siswa boleh membuka *website* dan referensi lainnya selama ujian sesuai ketentuan yang berlaku
- jawaban soal akan dikumpulkan di dalam repositori ini dengan sistem ***pull request*** dan siswa wajib mengirim ***link*** dari ***Forked Repositoy*** ke alamat email berikut ini :<br>

    to : operational_jkt@purwadhika.com <br>
    subject : JCWM15-JKT-REMED_FUNDAMENTAL

## Exam Setup Guide
- sebelum mengerjakan soal, lakukan ***Fork*** untuk repositori ini
    ![guide_1](https://dm2302files.storage.live.com/y4mPM_i6lwI5k82Ir4gCZ_iG2pyP67UhSVdVDnXxY7pavQzUXOFoRhblnD7tH4UyyvIdMs5jKUeX04maDpMg8lm2xVybajcR4oKSo13SyRlQoizTsMIaBj1oRcS1X3hOXahuJ0S9RM64NNzskC016XEiY8SVoAORMWYw9twz0MNgzgebD8G-fqIiwFdk4n8KSky?width=597&height=341&cropmode=none)

- kemudian *clone* repositori hasil *Forked* ke komputer kalian dengan cara *copy link forked respository* anda
    ![guide_2](https://dm2302files.storage.live.com/y4mngi9W5v2f4ScC1evMNDI3tFsCyCX8K0iDIiSiu2oEHRKrnqWoI2CBenLO05Gy5f2hv6JAfld8WBEFvECxOnJHnwTF26ZPQxvAtK8SIql7a7epnZqko-6c0oHyiZcT3wYkwzTwSLe_urvTzbP2LPa6qDF7E_lbo7yadTwbF0YDxdtYJIohYDPvTdMAdbm0N1u?width=637&height=410&cropmode=none)

- buka terminal atau *cmd* dengan mengarah pada folder tempat anda akan menyimpan hasil *clone* dari repositori yang sudah anda *forked*, kemudian jalankan perintah ```git clone``` dan *paste link forked repository* anda

    ``` C:\data\alee> git clone http://github.com/alee/...```

- pindah ke direktori folder hasil ```git clone``` dengan cara

    ``` C:\data\alee> cd REMIDIAL_FUND_JCWM15 ``` 

- lalu buatlah sebuah *branch* baru tempat anda akan mengerjakan soal ujian

    ``` C:\data\alee\REMIDIAL_FUND_JCWM15> git checkout -b ALEE ```

- bukalah *code editor* anda atau *vscode* : 

    ``` C:\data\alee\REMIDIAL_FUND_JCWM15> code . ```

- pastikan anda berada di-*branch* yang baru anda buat dengan cara lihat dipojok kiri bawah *vscode* dan anda akan melihat nama *branch* yang baru anda buat atau anda bisa menggunakan perintah : ``` git branch ``` di terminal atau cmd untuk melihat semua daftar *branch* yang ada di folder *project* anda, *branch* yang dipakai saat ini ditandai dengan warna hijau dan *nama-*branch*
- buatlah sebuah folder dengan nama : NAMA-ANDA-PROGRAM, e.x. ALEE-JCWM15 <br>
    ![guide_3](https://dm2302files.storage.live.com/y4mvImwujueJ1NUb3nfaJD0bwJ_tORohUM7RouOuFgO4e-WgoHG-l8pbCcBxVbh4vsymibOBkwnfcfcglkxmCvZK3bxRVYHBii0VgVVg-cT7vaBaND453fB0omDRCeUldxn2AgdIzZV09fGarNu2Y0E_irkAPmWhw7AFC3daoF5qBLPLEKAXA4JjIZF_h_-_9Nl?width=513&height=296&cropmode=none)

- kerjakanlah semua soal ujian didalam folder tersebut

> **NOTE** : <br>
> - jangan hapus file .gitignore dan file lainnya hasil dari clone baik di-*branch* master atau di *branch* baru tempat anda mengerjakan soal
> - jangan lakukan perubahan apapun di file .gitignore dan file *original* dari repositori ini

## Pull Request Guide
- sebelum anda melakukan *pull request* ke repositori pusat (respositori awal), **PASTIKAN!** bahwa semua file yang anda buat disimpan didalam satu folder (NAMA-ANDA-PROGRAM) e.x. ALEE-JCWM15
- simpan perubahan yang terjadi di *git* dengan cara : ```git add nama-file``` atau ```git add .``` untuk menyimpan semua perubahan yang terjadi sekaligus
    
    ``` C:\data\alee\REMIDIAL_FUND_JCWM15> git add . ```

- kemudian lakukan ```commit``` : ```git commit -m "masukan pesan commit"```, e.x. "alee : ujian fundamental JCWM15"

    ``` C:\data\alee\REMIDIAL_FUND_JCWM15> git commit -m "remidial fundamental alee" ```

- *push branch* baru tempat anda mengerjakan soal : ``` git push origin nama-branch ```

    ``` C:\data\alee\REMIDIAL_FUND_JCWM15> git push origin ALEE ```

- buka GitHub anda dan lihat repositori hasil *forked* anda. **PASTIKAN!** bahwa *branch* yang anda *push* sudah ada di GitHub
- jika sudah ada, maka akan ada *warning* untuk melakukan ```compare & pull request``` <br>
    ![guide_4](https://dm2302files.storage.live.com/y4mGa9MZeTWjTugH7OccfcgOb2Oni0Gutykiq0tuews5srteWd0dNZIAM6knsq4f1BqjX1rz0PHR1bd7qWK7mYR5KwrCUe_Z3VoC4bkQyDaNjuHCCpSvAoIUuHfwg72xr9oU6kmH6dv5Pz9G1uJkFtQmWH4wDqV5xrlh6fDNv-O-oeZpLGnG4cSkJB0fulX_5m4?width=456&height=203&cropmode=none)

- lakukan *pull request* dan pastikan bahwa
    1. **HEAD repository** berasal dari repositori kalian dan **branch** berasal dari *branch* tempat anda mengerjakan soal, **BASE respository** menuju repositori asal dan *branch* **master**
    2. beri informasi *pull request* berupa : nama-program-REMED_FUNDAMENTAL
    <br>e.x. : alee-JCWM15-REMED_FUNDAMENTAL
    
    ![guide_5](https://dm2302files.storage.live.com/y4mzi5inOsdXi7C2WG_duPr5cpk3lujK569d6557wMWks9gYnX_5pcmrwD85-S-2beRZWr3bCYWdp7vm0li4E_eg_JAo9RbcpkhYlgLCjN1XZxByyUkij4-Mc683GZ3URkDFTv0LhPj6eqBIOLTAMN3GWCoZhueyslrYOd-k4_GGrUdYYNXe7kxkXIpF12TEmRq?width=934&height=591&cropmode=none)

- jika *pull request* berhasil dan tidak terjadi konflik maka akan muncul info berikut ini
    ![gudie_6](https://dm2302files.storage.live.com/y4m6d20-8wJHrBabe5o3boRoyLEkWPCmcvaz6z2nMFp8Qu4gVx9DBkXabQhTI8kDRAiaVshkOKYW5hX67J2SJuzwkD10vvnMPEw36Hb0c4f-sKPyNlpes8wKlB0Rqp6_-Ky1HGsw-rwuxGs-EN0x_50XsI2_ypPTpoaIZiduU-g8LAQS5OeUCdg_xVas0Fen4GY?width=939&height=138&cropmode=none)

## Selamat Mengerjakan Ujian ☺
