import React from "react";
import styles from "../styles/track.module.css";
const Track = (props) => {
    return(
        <>
       {/* <div className={`${styles.container} ${styles.heading}`}>HACKTHON TRACKS</div> */}
      
    <div className={styles.container}>
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
            
                <pr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</pr>
            


            </div>


    </div>
    <div className = {styles.center_card}>
    <div className={styles.center_card_img}
              
            ></div>
            <div className={styles.box}>
            <pr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</pr>

</div>
        
    </div>
    <div className = {styles.right_card}>
    <div
              className={styles.right_card_img}
             
            ></div>
            <div className={styles.box}>
            <pr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</pr>

</div>
        
    </div>
    

    </div>






        </>
    )

}

export default Track;