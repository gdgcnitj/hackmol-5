import React from "react";
import styles from "../styles/prizeSection.module.css";

const PrizeSection = (props) => {
  return (
    <>
      <div className={styles.container}>
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
              src="Picture.png"
              alt="sec_prize"
            ></img>
            <div className={styles.left_card_content}>
              <div className={styles.left_card_box}>
                <div className={styles.left_card_prize_img}>
                  <div>2ND PRIZE</div>
                </div>
                <div className={styles.left_card_list}>
                  <li>1. Goodies</li>
                  <li>2. Geeks for Geeks(800/- INR coupon on all courses)</li>
                  <li>3. Echo-ar Free premium tier services</li>
                  <li>4. Online Mock Interviews from Interview Buddy </li>
                  <li>5. Lifetime upgrades of Taskade Unlimited</li>
                  <li>6. 1 Year of 1Passwords Families</li>
                  <li>7. 3 months of Draftbit Starter</li>
                  <li>8. Sashido Credits</li>
                  <li>9. 30 Days Free Receipt Credits</li>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.center_card}>
            <img
              className={styles.center_card_img}
              src="center.png"
              alt="first_prize"
            ></img>
            <div className={styles.center_card_content}>
              <div className={styles.center_card_box}>
                <div className={styles.center_card_prize_img}>
                  <div>1ST PRIZE</div>
                </div>
                <div className={styles.center_card_list}>
                  <li>1. Goodies</li>
                  <li>2. Geeks for Geeks(800/- INR coupon on all courses)</li>
                  <li>3. Echo-ar Free premium tier services</li>
                  <li>4. Online Mock Interviews from Interview Buddy </li>
                  <li>5. Lifetime upgrades of Taskade Unlimited</li>
                  <li>6. 1 Year of 1Passwords Families</li>
                  <li>7. 3 months of Draftbit Starter</li>
                  <li>8. Sashido Credits</li>
                  <li>9. 30 Days Free Receipt Credits</li>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_card}>
            <img
              className={styles.right_card_img}
              src="right.png"
              alt="sec_prize"
            ></img>
            <div className={styles.right_card_content}>
              <div className={styles.right_card_box}>
                <div className={styles.right_card_prize_img}>
                  <div>3RD PRIZE</div>
                </div>
                <div className={styles.right_card_list}>
                  <li>1. Goodies</li>
                  <li>2. Geeks for Geeks(800/- INR coupon on all courses)</li>
                  <li>3. Echo-ar Free premium tier services</li>
                  <li>4. Online Mock Interviews from Interview Buddy </li>
                  <li>5. Lifetime upgrades of Taskade Unlimited</li>
                  <li>6. 1 Year of 1Passwords Families</li>
                  <li>7. 3 months of Draftbit Starter</li>
                  <li>8. Sashido Credits</li>
                  <li>9. 30 Days Free Receipt Credits</li>
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
