import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB6Dc6N655i0EfqVXNp4e62NsoINHd6cSs",
    authDomain: "e-commerce-react-firebas-d8230.firebaseapp.com",
    projectId: "e-commerce-react-firebas-d8230",
    storageBucket: "e-commerce-react-firebas-d8230.appspot.com",
    messagingSenderId: "808123805390",
    appId: "1:808123805390:web:abc1721190f08726602a9f"
  };

const app = initializeApp(firebaseConfig); 
export const authentication=getAuth(app)