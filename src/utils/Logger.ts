export default class Logger {
  public static logD(TAG: string, message: String) {
    console.log(TAG + message);
  }
  static logI(TAG: string, message: String) {
    console.info(TAG, message);
  }
  static logE(TAG: string, message: String) {
    console.error(TAG, message);
  }
}
