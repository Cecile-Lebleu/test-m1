import React from "react"
import styles from "./diarly.module.scss"
import { Link } from "gatsby"

const Logo = () => (
   <div className={styles.icon}>
      <Link to="/">
         <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-svg="Diarly">
				<path className={styles.diarly_logo} fill-rule="evenodd" clip-rule="evenodd" d="M512 953C755.558 953 953 755.558 953 512C953 268.442 755.558 71 512 71C268.442 71 71 268.442 71 512C71 755.558 268.442 953 512 953ZM512 922C738.437 922 922 738.437 922 512C922 285.563 738.437 102 512 102C285.563 102 102 285.563 102 512C102 738.437 285.563 922 512 922Z" />
				<path className={styles.diarly_logo} fill-rule="evenodd" clip-rule="evenodd" d="M393.158 783.787C283.543 655.199 302.8 445.267 369.356 472.019C349.188 356.556 421.696 249.663 459.419 309.531C478.415 149.827 638.711 95.5156 745.999 61.1922C650.209 167.162 744.909 262.694 610.742 381.176C646.635 367.335 670.318 382.062 662.929 421.343C650.49 487.472 567.101 546.257 556.2 565.002C585.602 558.693 604.5 572.9 598.722 604.232C585.835 674.113 516.617 717.593 474.074 782.745C440.784 833.726 430.378 910.968 445.763 995.971L424.756 997.392C403.396 861.604 408.152 734.792 446.602 592.457C480.658 466.392 525.715 351.638 611.114 220.33C611.74 219.368 611.521 218.125 610.621 217.49C609.683 216.828 608.429 217.089 607.787 217.984C582.289 253.589 557.918 286.292 526.942 342.466C477.514 432.1 427.164 561.008 409.067 659.142C400.526 705.455 395.751 736.761 393.158 783.787Z" />
         </svg>
      </Link>
   </div>
)

export default Logo