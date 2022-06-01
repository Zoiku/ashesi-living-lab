import { getDatabase, ref, child, get, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAneKmtFgBTlF-Hv8kSuDayJP1pG3usigs",
  authDomain: "ashesi-as-a-living-lab-af663.firebaseapp.com",
  databaseURL:
    "https://ashesi-as-a-living-lab-af663-default-rtdb.firebaseio.com",
  projectId: "ashesi-as-a-living-lab-af663",
  storageBucket: "ashesi-as-a-living-lab-af663.appspot.com",
  messagingSenderId: "323009906773",
  appId: "1:323009906773:web:db6b1d42f6639e192bacdc",
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
