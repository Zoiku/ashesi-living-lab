import { getDatabase, ref, child, get, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: XXX,
  authDomain: XXX,
  databaseURL: XXX,
  projectId: XXX,
  storageBucket: XXX,
  messagingSenderId: XXX,
  appId: XXX,
};

class FIRESTOREDATABASE {
  database = null;
  constructor() {
    this.database = getDatabase(initializeApp(firebaseConfig));
  }

  getData() {
    const dbRef = ref(this.database);
    return get(child(dbRef, `Lecture-Hall/Lab222`));
  }

  postData(id, humidity, motion, light) {
    return set(ref(this.database, `Lecture-Hall/Lab222/${id}`), {
      humidity: humidity,
      motion: motion,
      light: light,
    });
  }
}

export default FIRESTOREDATABASE;
