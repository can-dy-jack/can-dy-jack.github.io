import style from "./index.module.css";

export default function CircleLoading (){
  return (
    <div className={style.dotSpinner}>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
    </div>
  )
}