// Firebase SDK'ları (ES6 modül)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Senin Firebase yapılandırman
const firebaseConfig = {
  apiKey: "AIzaSyCI4Kw-lDMWMI6V5WIQPPTVtzzAUic6ZxU",
  authDomain: "deneme-giris-3c8e1.firebaseapp.com",
  projectId: "deneme-giris-3c8e1",
  storageBucket: "deneme-giris-3c8e1.appspot.com",
  messagingSenderId: "808992598321",
  appId: "1:808992598321:web:38e55dbae8d8b3d8b66810",
  measurementId: "G-GJS22L3XBS"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Kayıt fonksiyonu
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Kayıt başarılı!");
      window.location.href = "panel.html"; // giriş sonrası yönlendirme
    })
    .catch(error => {
      document.getElementById("error").innerText = error.message;
    });
};

// Giriş fonksiyonu
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Giriş başarılı!");
      window.location.href = "panel.html"; // giriş sonrası yönlendirme
    })
    .catch(error => {
      document.getElementById("error").innerText = error.message;
    });
};

// Çıkış fonksiyonu
window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Çıkış yapıldı.");
      window.location.href = "index.html";
    })
    .catch(error => {
      console.error("Çıkış hatası:", error);
    });
};

// Kullanıcı durumu kontrolü (isteğe bağlı)
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("Giriş yapıldı:", user.email);
  } else {
    console.log("Kullanıcı çıkış yaptı.");
  }
});
