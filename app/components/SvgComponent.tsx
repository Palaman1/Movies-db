import * as React from "react";

function SvgComponent(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={116} height={10} fill="none" viewBox="0 0 116 10" {...props}>
      <path
        fill="white"
        d="M3.14204 9.79651L0.75568 1.06924H1.82954L3.65341 8.17719H3.73863L5.59659 1.06924H6.78977L8.64773 8.17719H8.73295L10.5568 1.06924H11.6307L9.24432 9.79651H8.15341L6.22727 2.84196H6.15909L4.23295 9.79651H3.14204Z"
      />
      <path
        fill="white"
        d="M13.8168 5.85901V9.79651H12.8111V1.06924H13.8168V4.27378H13.902C14.0554 3.93571 14.2855 3.66725 14.5923 3.46838C14.902 3.26668 15.3139 3.16583 15.8281 3.16583C16.2741 3.16583 16.6648 3.25532 17 3.43429C17.3352 3.61043 17.5952 3.88174 17.7798 4.24821C17.9673 4.61185 18.0611 5.07492 18.0611 5.63742V9.79651H17.0554V5.7056C17.0554 5.18571 16.9205 4.78372 16.6506 4.49963C16.3835 4.2127 16.0128 4.06924 15.5384 4.06924C15.2088 4.06924 14.9134 4.13884 14.652 4.27804C14.3935 4.41725 14.1889 4.62037 14.0384 4.88742C13.8906 5.15446 13.8168 5.47833 13.8168 5.85901Z"
      />
      <path
        fill="white"
        d="M21.8271 9.94992C21.4123 9.94992 21.0359 9.87179 20.6978 9.71554C20.3597 9.55645 20.0913 9.32776 19.8924 9.02946C19.6935 8.72833 19.5941 8.36469 19.5941 7.93855C19.5941 7.56355 19.668 7.25958 19.8157 7.02662C19.9634 6.79083 20.1609 6.60617 20.408 6.47264C20.6552 6.33912 20.9279 6.23969 21.2262 6.17435C21.5273 6.10617 21.8299 6.05219 22.1339 6.01242C22.5316 5.96128 22.854 5.92293 23.1012 5.89736C23.3512 5.86895 23.533 5.82208 23.6467 5.75674C23.7631 5.6914 23.8214 5.57776 23.8214 5.41583V5.38174C23.8214 4.96128 23.7063 4.63458 23.4762 4.40162C23.2489 4.16867 22.9038 4.05219 22.4407 4.05219C21.9606 4.05219 21.5842 4.1573 21.3114 4.36753C21.0387 4.57776 20.8469 4.80219 20.7361 5.04083L19.7816 4.69992C19.9521 4.30219 20.1793 3.99253 20.4634 3.77094C20.7504 3.54651 21.0629 3.39026 21.4009 3.30219C21.7418 3.21128 22.0771 3.16583 22.4066 3.16583C22.6168 3.16583 22.8583 3.19139 23.131 3.24253C23.4066 3.29083 23.6722 3.39168 23.9279 3.54509C24.1864 3.6985 24.4009 3.93003 24.5714 4.23969C24.7418 4.54935 24.8271 4.96412 24.8271 5.48401V9.79651H23.8214V8.91014H23.7702C23.7021 9.05219 23.5884 9.20418 23.4293 9.36611C23.2702 9.52804 23.0586 9.66583 22.7944 9.77946C22.5302 9.8931 22.2077 9.94992 21.8271 9.94992ZM21.9805 9.04651C22.3782 9.04651 22.7134 8.96838 22.9861 8.81213C23.2617 8.65588 23.4691 8.45418 23.6083 8.20702C23.7504 7.95986 23.8214 7.69992 23.8214 7.42719V6.50674C23.7788 6.55787 23.685 6.60475 23.5401 6.64736C23.3981 6.68713 23.2333 6.72264 23.0458 6.75389C22.8611 6.7823 22.6808 6.80787 22.5046 6.8306C22.3313 6.85049 22.1907 6.86753 22.0827 6.88174C21.8214 6.91583 21.5771 6.97122 21.3498 7.04793C21.1254 7.12179 20.9435 7.23401 20.8043 7.38458C20.668 7.5323 20.5998 7.73401 20.5998 7.98969C20.5998 8.33912 20.729 8.60333 20.9876 8.7823C21.2489 8.95844 21.5799 9.04651 21.9805 9.04651Z"
      />
      <path
        fill="white"
        d="M29.5092 3.25105V4.10333H26.1172V3.25105H29.5092ZM27.1058 1.68287H28.1115V7.92151C28.1115 8.2056 28.1527 8.41867 28.2351 8.56071C28.3203 8.69992 28.4283 8.79367 28.5589 8.84196C28.6925 8.88742 28.8331 8.91014 28.9808 8.91014C29.0916 8.91014 29.1825 8.90446 29.2535 8.8931C29.3246 8.8789 29.3814 8.86753 29.424 8.85901L29.6285 9.76242C29.5604 9.78799 29.4652 9.81355 29.343 9.83912C29.2209 9.86753 29.066 9.88174 28.8785 9.88174C28.5945 9.88174 28.316 9.82066 28.0433 9.6985C27.7734 9.57634 27.549 9.39026 27.37 9.14026C27.1939 8.89026 27.1058 8.57492 27.1058 8.19424V1.68287Z"
      />
      <path
        fill="white"
        d="M34.5334 1.06924H35.7947L38.7607 8.31355H38.8629L41.8288 1.06924H43.0902V9.79651H42.1016V3.16583H42.0163L39.2891 9.79651H38.3345L35.6072 3.16583H35.522V9.79651H34.5334V1.06924Z"
      />
      <path
        fill="white"
        d="M47.7319 9.93287C47.141 9.93287 46.6225 9.79225 46.1765 9.511C45.7333 9.22975 45.3867 8.83628 45.1367 8.3306C44.8896 7.82492 44.766 7.23401 44.766 6.55787C44.766 5.87605 44.8896 5.28088 45.1367 4.77236C45.3867 4.26384 45.7333 3.86895 46.1765 3.5877C46.6225 3.30645 47.141 3.16583 47.7319 3.16583C48.3228 3.16583 48.8398 3.30645 49.283 3.5877C49.7291 3.86895 50.0756 4.26384 50.3228 4.77236C50.5728 5.28088 50.6978 5.87605 50.6978 6.55787C50.6978 7.23401 50.5728 7.82492 50.3228 8.3306C50.0756 8.83628 49.7291 9.22975 49.283 9.511C48.8398 9.79225 48.3228 9.93287 47.7319 9.93287ZM47.7319 9.02946C48.1808 9.02946 48.5501 8.91441 48.8398 8.68429C49.1296 8.45418 49.3441 8.15162 49.4833 7.77662C49.6225 7.40162 49.6921 6.99537 49.6921 6.55787C49.6921 6.12037 49.6225 5.7127 49.4833 5.33486C49.3441 4.95702 49.1296 4.65162 48.8398 4.41867C48.5501 4.18571 48.1808 4.06924 47.7319 4.06924C47.283 4.06924 46.9137 4.18571 46.6239 4.41867C46.3342 4.65162 46.1197 4.95702 45.9805 5.33486C45.8413 5.7127 45.7717 6.12037 45.7717 6.55787C45.7717 6.99537 45.8413 7.40162 45.9805 7.77662C46.1197 8.15162 46.3342 8.45418 46.6239 8.68429C46.9137 8.91441 47.283 9.02946 47.7319 9.02946Z"
      />
      <path
        fill="white"
        d="M57.3509 3.25105L54.9304 9.79651H53.9077L51.4872 3.25105H52.5781L54.3849 8.46696H54.4531L56.2599 3.25105H57.3509Z"
      />
      <path
        fill="white"
        d="M58.6783 9.79651V3.25105H59.6839V9.79651H58.6783ZM59.1896 2.16015C58.9936 2.16015 58.8246 2.09338 58.6825 1.95986C58.5433 1.82634 58.4737 1.66583 58.4737 1.47833C58.4737 1.29083 58.5433 1.13032 58.6825 0.996793C58.8246 0.86327 58.9936 0.796509 59.1896 0.796509C59.3857 0.796509 59.5533 0.86327 59.6925 0.996793C59.8345 1.13032 59.9055 1.29083 59.9055 1.47833C59.9055 1.66583 59.8345 1.82634 59.6925 1.95986C59.5533 2.09338 59.3857 2.16015 59.1896 2.16015Z"
      />
      <path
        fill="white"
        d="M64.2702 9.93287C63.6396 9.93287 63.0955 9.79367 62.6381 9.51526C62.1836 9.23401 61.8327 8.84196 61.5856 8.33912C61.3413 7.83344 61.2191 7.24537 61.2191 6.57492C61.2191 5.90446 61.3413 5.31355 61.5856 4.80219C61.8327 4.28799 62.1765 3.88742 62.6168 3.60049C63.06 3.31071 63.5771 3.16583 64.168 3.16583C64.5089 3.16583 64.8455 3.22264 65.1779 3.33628C65.5103 3.44992 65.8128 3.63458 66.0856 3.89026C66.3583 4.1431 66.5756 4.47833 66.7376 4.89594C66.8995 5.31355 66.9805 5.82776 66.9805 6.43855V6.86469H61.935V5.99537H65.9577C65.9577 5.62605 65.8839 5.29651 65.7361 5.00674C65.5913 4.71696 65.3839 4.48827 65.114 4.32066C64.8469 4.15304 64.5316 4.06924 64.168 4.06924C63.7674 4.06924 63.4208 4.16867 63.1282 4.36753C62.8384 4.56355 62.6154 4.81924 62.4592 5.13458C62.3029 5.44992 62.2248 5.78799 62.2248 6.14878V6.72833C62.2248 7.22264 62.31 7.64168 62.4805 7.98543C62.6538 8.32634 62.8938 8.58628 63.2006 8.76526C63.5075 8.9414 63.864 9.02946 64.2702 9.02946C64.5344 9.02946 64.7731 8.99253 64.9861 8.91867C65.2021 8.84196 65.3881 8.72833 65.5444 8.57776C65.7006 8.42435 65.8214 8.23401 65.9066 8.00674L66.8782 8.27946C66.7759 8.60901 66.604 8.89878 66.3626 9.14878C66.1211 9.39594 65.8228 9.58912 65.4677 9.72833C65.1126 9.86469 64.7134 9.93287 64.2702 9.93287Z"
      />
      <path
        fill="white"
        d="M73.0785 1.06924V9.79651H72.0217V1.06924H73.0785Z"
      />
      <path
        fill="white"
        d="M79.6974 4.71696L78.794 4.97264C78.7372 4.82208 78.6534 4.67577 78.5426 4.53372C78.4347 4.38884 78.2869 4.26952 78.0994 4.17577C77.9119 4.08202 77.6719 4.03514 77.3793 4.03514C76.9787 4.03514 76.6449 4.12747 76.3778 4.31213C76.1136 4.49395 75.9815 4.72549 75.9815 5.00674C75.9815 5.25674 76.0724 5.45418 76.2543 5.59907C76.4361 5.74395 76.7202 5.86469 77.1065 5.96128L78.0781 6.19992C78.6633 6.34196 79.0994 6.55929 79.3864 6.85191C79.6733 7.14168 79.8168 7.51526 79.8168 7.97264C79.8168 8.34764 79.7088 8.68287 79.4929 8.97833C79.2798 9.27378 78.9815 9.50674 78.598 9.67719C78.2145 9.84765 77.7685 9.93287 77.2599 9.93287C76.5923 9.93287 76.0398 9.78799 75.6023 9.49821C75.1648 9.20844 74.8878 8.78515 74.7713 8.22833L75.7258 7.98969C75.8168 8.34196 75.9886 8.60617 76.2415 8.7823C76.4972 8.95844 76.831 9.04651 77.2429 9.04651C77.7116 9.04651 78.0838 8.94708 78.3594 8.74821C78.6378 8.54651 78.777 8.30503 78.777 8.02378C78.777 7.79651 78.6974 7.60617 78.5383 7.45276C78.3793 7.29651 78.1349 7.18003 77.8054 7.10333L76.7145 6.84764C76.115 6.7056 75.6747 6.48543 75.3935 6.18713C75.1151 5.886 74.9758 5.50958 74.9758 5.05787C74.9758 4.68855 75.0795 4.36185 75.2869 4.07776C75.4972 3.79367 75.7827 3.57066 76.1435 3.40872C76.5071 3.24679 76.919 3.16583 77.3793 3.16583C78.027 3.16583 78.5355 3.30787 78.9048 3.59196C79.277 3.87605 79.5412 4.25105 79.6974 4.71696Z"
      />
      <path
        fill="white"
        d="M91.7624 1.06924V9.79651H90.7397L85.984 2.94424H85.8988V9.79651H84.842V1.06924H85.8647L90.6374 7.93855H90.7227V1.06924H91.7624Z"
      />
      <path
        fill="white"
        d="M96.4851 9.93287C95.8544 9.93287 95.3104 9.79367 94.853 9.51526C94.3984 9.23401 94.0476 8.84196 93.8004 8.33912C93.5561 7.83344 93.4339 7.24537 93.4339 6.57492C93.4339 5.90446 93.5561 5.31355 93.8004 4.80219C94.0476 4.28799 94.3913 3.88742 94.8317 3.60049C95.2749 3.31071 95.7919 3.16583 96.3828 3.16583C96.7237 3.16583 97.0604 3.22264 97.3927 3.33628C97.7251 3.44992 98.0277 3.63458 98.3004 3.89026C98.5731 4.1431 98.7905 4.47833 98.9524 4.89594C99.1143 5.31355 99.1953 5.82776 99.1953 6.43855V6.86469H94.1499V5.99537H98.1726C98.1726 5.62605 98.0987 5.29651 97.951 5.00674C97.8061 4.71696 97.5987 4.48827 97.3288 4.32066C97.0618 4.15304 96.7464 4.06924 96.3828 4.06924C95.9822 4.06924 95.6357 4.16867 95.343 4.36753C95.0533 4.56355 94.8302 4.81924 94.674 5.13458C94.5177 5.44992 94.4396 5.78799 94.4396 6.14878V6.72833C94.4396 7.22264 94.5249 7.64168 94.6953 7.98543C94.8686 8.32634 95.1087 8.58628 95.4155 8.76526C95.7223 8.9414 96.0788 9.02946 96.4851 9.02946C96.7493 9.02946 96.9879 8.99253 97.201 8.91867C97.4169 8.84196 97.603 8.72833 97.7592 8.57776C97.9155 8.42435 98.0362 8.23401 98.1214 8.00674L99.093 8.27946C98.9908 8.60901 98.8189 8.89878 98.5774 9.14878C98.3359 9.39594 98.0376 9.58912 97.6825 9.72833C97.3274 9.86469 96.9283 9.93287 96.4851 9.93287Z"
      />
      <path
        fill="white"
        d="M101.299 3.25105L102.868 5.92719L104.436 3.25105H105.595L103.481 6.52378L105.595 9.79651H104.436L102.868 7.25674L101.299 9.79651H100.14L102.22 6.52378L100.14 3.25105H101.299Z"
      />
      <path
        fill="white"
        d="M109.876 3.25105V4.10333H106.484V3.25105H109.876ZM107.473 1.68287H108.479V7.92151C108.479 8.2056 108.52 8.41867 108.602 8.56071C108.687 8.69992 108.795 8.79367 108.926 8.84196C109.06 8.88742 109.2 8.91014 109.348 8.91014C109.459 8.91014 109.55 8.90446 109.621 8.8931C109.692 8.8789 109.749 8.86753 109.791 8.85901L109.996 9.76242C109.928 9.78799 109.832 9.81355 109.71 9.83912C109.588 9.86753 109.433 9.88174 109.246 9.88174C108.962 9.88174 108.683 9.82066 108.411 9.6985C108.141 9.57634 107.916 9.39026 107.737 9.14026C107.561 8.89026 107.473 8.57492 107.473 8.19424V1.68287Z"
      />
      <path
        fill="white"
        d="M112.702 7.34196V7.29083C112.707 6.74821 112.764 6.3164 112.872 5.99537C112.98 5.67435 113.134 5.41441 113.332 5.21554C113.531 5.01668 113.77 4.83344 114.048 4.66583C114.216 4.56355 114.366 4.44282 114.5 4.30361C114.634 4.16157 114.739 3.99821 114.815 3.81355C114.895 3.62889 114.935 3.42435 114.935 3.19992C114.935 2.92151 114.869 2.68003 114.739 2.47549C114.608 2.27094 114.433 2.11327 114.214 2.00247C113.996 1.89168 113.753 1.83628 113.486 1.83628C113.253 1.83628 113.028 1.88458 112.812 1.98117C112.597 2.07776 112.416 2.22975 112.271 2.43713C112.126 2.64452 112.043 2.91583 112.02 3.25105H110.946C110.969 2.7681 111.094 2.35475 111.321 2.011C111.551 1.66725 111.854 1.40446 112.229 1.22264C112.607 1.04083 113.026 0.949918 113.486 0.949918C113.986 0.949918 114.42 1.04935 114.79 1.24821C115.162 1.44708 115.449 1.7198 115.651 2.06639C115.855 2.41299 115.957 2.80787 115.957 3.25105C115.957 3.56355 115.909 3.84622 115.812 4.09907C115.719 4.35191 115.582 4.57776 115.403 4.77662C115.227 4.97549 115.014 5.15162 114.764 5.30503C114.514 5.46128 114.314 5.62605 114.163 5.79935C114.013 5.9698 113.903 6.17293 113.835 6.40872C113.767 6.64452 113.73 6.93855 113.724 7.29083V7.34196H112.702ZM113.247 9.86469C113.037 9.86469 112.857 9.78941 112.706 9.63884C112.555 9.48827 112.48 9.30787 112.48 9.09764C112.48 8.88742 112.555 8.70702 112.706 8.55645C112.857 8.40588 113.037 8.3306 113.247 8.3306C113.457 8.3306 113.638 8.40588 113.788 8.55645C113.939 8.70702 114.014 8.88742 114.014 9.09764C114.014 9.23685 113.979 9.36469 113.908 9.48117C113.839 9.59765 113.747 9.6914 113.631 9.76242C113.517 9.8306 113.389 9.86469 113.247 9.86469Z"
      />
    </svg>
  );
}

export default SvgComponent;