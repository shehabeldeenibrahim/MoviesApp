import axios from "axios";
import { ToastAndroid } from "react-native";
import { api_key } from "../../config";

/**
 * Shows error toast message when error occurs
 * @param  none
 * @return none
 */
function showToast() {
  ToastAndroid.show(
    "Please check your internet connection!",
    ToastAndroid.LONG
  );
}

/**
 * Shows error toast message when error occurs
 * @param  none
 * @return Json containing data retrieved from API
 */
export async function getMovies(page) {
  try {
    const response = await axios(
      // Movies URL
      `http://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`,
      {}
    ).catch((e) => {
      /* Error Handling */
      showToast();
      console.log(e);
    });
    const json = await response.data.results;
    return json;
  } catch (error) {
    /* Error Handling */
    showToast();
    console.log(error);
  }
}
