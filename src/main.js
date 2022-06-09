import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZEnS64javCDVA21EB4aRtGhjKr60pvhU",
  authDomain: "vue-book-5e1e3.firebaseapp.com",
  projectId: "vue-book-5e1e3",
  storageBucket: "vue-book-5e1e3.appspot.com",
  messagingSenderId: "509954204398",
  appId: "1:509954204398:web:b4462102430dbdad36c9ff"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
//const firebaseAuth = getAuth(firebaseApp);
//onAuthStateChanged(auth, user => {
  // Check for user status
//});
//const auth = getAuth(app)
//const auth = app.auth()

//export{ auth}





/*auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})*/
//const authInstance = getAuth(app);

//onAuthStateChanged(authInstance, user => console.log(user));

createApp(App).use(router).mount('#app')
