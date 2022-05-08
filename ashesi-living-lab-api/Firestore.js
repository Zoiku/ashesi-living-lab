import {getDatabase, ref, child, get, set} from "firebase/database"
import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAnkrwbbw6dKlE70-zLbFrhAqiLwBVhQM4",
    authDomain: "ashesi-living-lab.firebaseapp.com",
    databaseURL: "https://ashesi-living-lab-default-rtdb.firebaseio.com",
    projectId: "ashesi-living-lab",
    storageBucket: "ashesi-living-lab.appspot.com",
    messagingSenderId: "1017561467972",
    appId: "1:1017561467972:web:c26f97c75f49c35bda4011",
    measurementId: "G-NPQQ0DMN64"
}

class FIRESTOREDATABASE {
    database = null;
    constructor() {
        this.database = getDatabase(initializeApp(firebaseConfig))
    }

    getData() {
        const dbRef = ref(this.database);
        return get(child(dbRef, `Lecture-Hall/Lab222`))
    }

    postData(id,humidity,motion,light) {
        return set(ref(this.database, `Lecture-Hall/Lab222/${id}` ), {
            humidity: humidity,
            motion: motion,
            light: light
        });
    }
}

export default FIRESTOREDATABASE