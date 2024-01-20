import React from "react";
import styles from "../styles/track.module.css";
const Track = (props) => {
    return(
        <>
       {/* <div className={`${styles.container} ${styles.heading}`}>HACKTHON TRACKS</div> */}
      
    <div id='tracks' className={styles.container}>
     <div className={styles.heading}>HACKTHON TRACKS<br/><br/></div>
     <div className={styles.bottom}>
     <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" fill="white"/>
</svg>
     </div>
    <div className = {styles.left_card}>
    <div
              className={styles.left_card_img}
             
            >
             
            </div>
            <div className={styles.box}>
            
                <pr>Round 1 : PPT Round (Online), Common for All .Qualifying ones to be going for Physical Hackathon Round</pr>
            


            </div>


    </div>
    <div className = {styles.center_card}>
    <div className={styles.center_card_img}
              
            ></div>
            <div className={styles.box}>
            <pr>Freshers Track: For begineers , specifically focused for Freshmen to have fair and healthy competition amongst other experienced and senior competitors.</pr>

</div>
        
    </div>
    <div className = {styles.right_card}>
    <div
              className={styles.right_card_img}
             
            ></div>
            <div className={styles.box}>
            <pr>Expert , Seniors Track : The experienced ones are allowed to opt it , higher the risk ,higher is the reward.</pr>

</div>
        
    </div>
    

    </div>






        </>
    )

}

export default Track;