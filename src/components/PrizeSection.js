import styles from "../styles/prizeSection.module.css";
function List(props){
  return(
    
<div className={styles.coincontainer}>
                <img className={styles.coin} src = {props.imgsrc} alt = "coin"/>
                <li>{props.content}</li>
                </div>
  

  );
}

const PrizeSection = (props) => {
  return (
    <>
      <div id='prizes' className={styles.container}>
        <div className={styles.top_right}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="126"
            viewBox="0 0 192 126"
            fill="none"
          >
            <rect x="64" y="-2" width="64" height="64" fill="white" />
            <rect x="128" y="62" width="64" height="64" fill="white" />
            <rect y="62" width="64" height="64" fill="white" />
          </svg>
        </div>

        <div className={styles.bottom_left}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="252"
            height="127"
            viewBox="0 0 252 127"
            fill="none"
          >
            <rect x="60" y="64" width="64" height="64" fill="white" />
            <rect x="-4" width="64" height="64" fill="white" />
            <rect x="188" y="64" width="64" height="64" fill="white" />
          </svg>
        </div>
        
        <div className={styles.heading}>PRIZES</div>
        <div className={styles.card_container}>
          <div className={styles.left_card}>
            <img
              className={styles.left_card_img}
              src="images/Picture.png"
              alt="sec_prize"
            ></img>
            <div className={styles.left_card_content}>
              <div className={styles.left_card_box}>
              <div className={styles.logocontainer}>
                <div className={styles.left_card_prize_img}>
                  <div>2ND PRIZE</div>
                </div>
                <img className={styles.logo2prize} src = "images/2plogo.png"></img>
                </div>
                <div className={styles.left_card_list}>
                
                  <List  imgsrc = "./images/image151.png"  content = "Goodies"/>
                  <List  imgsrc = "./images/image151.png" content = "Geeks for Geeks(800/- INR coupon on all courses)"/>
                  <List  imgsrc = "./images/image151.png"  content = "Echo-ar Free premium tier services"/>
                  <List  imgsrc = "./images/image151.png" content = "Online Mock Interviews from Interview Buddy "/>
                  <List  imgsrc = "./images/image151.png"  content = "Lifetime upgrades of Taskade Unlimited"/>
                  <List  imgsrc = "./images/image151.png" content = "1 Year of 1Passwords Families"/>
                  <List  imgsrc = "./images/image151.png" content = "3 months of Draftbit Starter"/>
                  <List imgsrc = "./images/image151.png"  content = "Sashido Credits"/>
                  <List imgsrc = "./images/image151.png"  content = "30 Days Free Receipt Credits"/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.center_card}>
            <img
              className={styles.center_card_img}
              src="images/center.png"
              alt="first_prize"
            ></img>
            <div className={styles.center_card_content}>
              <div className={styles.center_card_box}>
              <div className={styles.logocontainer}>
              <img className={styles.logo2prize} src = "images/1logol.png"></img>
                <div className={styles.center_card_prize_img}>
                  <div>1ST PRIZE</div>
                </div>
                <img className={styles.logo2prize} src = "images/1logor.png"></img>
                </div>
                <div className={styles.center_card_list}>
                <List  imgsrc = "./images/image152.png"  content = "Goodies"/>
                  <List  imgsrc = "./images/image152.png"  content = "Geeks for Geeks(800/- INR coupon on all courses)"/>
                  <List  imgsrc = "./images/image152.png" content = "Echo-ar Free premium tier services"/>
                  <List  imgsrc = "./images/image152.png" content = "Online Mock Interviews from Interview Buddy "/>
                  <List  imgsrc = "./images/image152.png" content = "Lifetime upgrades of Taskade Unlimited"/>
                  <List  imgsrc = "./images/image152.png" content = "1 Year of 1Passwords Families"/>
                  <List  imgsrc = "./images/image152.png" content = "3 months of Draftbit Starter"/>
                  <List imgsrc = "./images/image152.png"  content = "Sashido Credits"/>
                  <List imgsrc = "./images/image152.png"  content = "30 Days Free Receipt Credits"/>
              

                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_card}>
            <img
              className={styles.right_card_img}
              src="images/right.png"
              alt="sec_prize"
            ></img>
            <div className={styles.right_card_content}>
              <div className={styles.right_card_box}>
              <div className={styles.logocontainer}>
                <div className={styles.right_card_prize_img}>
                  <div>3RD PRIZE</div>
                </div>
               
                <img className={styles.logo2prize} src = "images/3logo.png"></img>
                </div>
                <div className={styles.right_card_list}>
                <List  imgsrc = "./images/image153.png"  content = "Goodies"/>
                  <List  imgsrc = "./images/image153.png"  content = "Geeks for Geeks(800/- INR coupon on all courses)"/>
                  <List  imgsrc = "./images/image153.png" content = "Echo-ar Free premium tier services"/>
                  <List  imgsrc = "./images/image153.png"  content = "Online Mock Interviews from Interview Buddy "/>
                  <List  imgsrc = "./images/image153.png" content = "Lifetime upgrades of Taskade Unlimited"/>
                  <List  imgsrc = "./images/image153.png" content = "1 Year of 1Passwords Families"/>
                  <List  imgsrc = "./images/image153.png" content = "3 months of Draftbit Starter"/>
                  <List imgsrc = "./images/image153.png" content = "Sashido Credits"/>
                  <List imgsrc = "./images/image153.png" content = "30 Days Free Receipt Credits"/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
    
  );
};

export default PrizeSection;