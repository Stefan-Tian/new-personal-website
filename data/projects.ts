const garenaProjects = [
  {
    id: 1,
    name: 'Arena of Valor - Skin upgrade',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/skinupgrade-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/skinupgrade-2.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/skinupgrade-blur.jpg',
    descriptions: [
      'Users can upgrade lower-level skins to upper-level ones using the correct materials.',
      'Users can pay with extra coins if they do not have the required materials.',
      'Users can refresh the deals on the main page.',
    ],
    challenges: [
      'Developing a project with Vue3 and Typescript for the first time.',
      'Migrating Webpack and i18n settings in our internal Vue2 template to the new Vue3 one.',
    ],
    techStack: [
      'Vue3',
      'Typescript',
      'Composition API + setup script',
      'Sass',
      'Vue-i18n',
    ],
    techStackIcons: ['vue', 'typescript', 'sass'],
  },
  {
    id: 2,
    name: 'League of Legends - Data Review',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-3.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-4.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-5.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-6.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-7.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-8.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-9.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-10.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-blur.jpg',
    descriptions: [
      'Users can review their data since 2016.',
      'Users can customize the data they want to share and post them on social media.',
      'Users can share their data with custom meta info.',
      "Users can check their friends' data.",
      'The marketing team can view statistics with GA tracking.',
    ],
    challenges: [
      'Handling missing data to display the page properly.',
      'Using Nuxt to handle server-side rendering.',
      'Letting regional teams customize the fields of data to display to the user.',
      'Setting up internal cloud services to host the project.',
    ],
    techStack: ['Nuxt', 'Vuex', 'Nuxt i18n', 'Google Analytics 4', 'Sass'],
    techStackIcons: ['nuxt', 'vue', 'javascript', 'sass'],
  },
  {
    id: 3,
    name: 'Call of Duty Mobile - Nine Grid',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-3.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-4.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-blur.jpg',
    descriptions: [
      'Users can select a jackpot and some milestones of their choice.',
      'Users can spend a few coins to do 1 draw or multiple draws with a discount.',
      'Users can ban some items they do not wish to get before drawing.',
      'Users will get some points after a draw.',
      'Users can get the jackpot either by drawing or reaching a certain point.',
    ],
    challenges: [
      'Creating an interactive tutorial using mock data to intercept the real API.',
      'Constructing a custom data structure to facilitate the selection process of milestones in order to accomodate for different configurations.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 4,
    name: 'League of Legends - Win Token',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/wintoken-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/wintoken-2.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/wintoken-blur.jpg',
    descriptions: [
      'Users can sign in every day to get a reward.',
      'Users can pay some coins to re-sign in if they miss the date.',
      'Users can get extra rewards if they win games or reaching certain win streaks.',
      'Users can type in promo code dispensed by the marketing team to redeem rewards.',
    ],
    challenges: [
      'Making an unorthodox and customized scrollbar for the modal.',
      'Using a slider as a scrollbar to match the design.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'typescript', 'sass'],
  },
  {
    id: 5,
    name: 'FreeFire - Slot Machine',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/slotmachine-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/slotmachine-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/slotmachine-3.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/slotmachine-blur.jpg',
    descriptions: [
      'Users can spend some coins to do 1 or multiple draws on the slot machine.',
      'Users can turn on/off the background music.',
      'Users can skip the animation at any point of the drawing process.',
    ],
    challenges: [
      'Dealing with legacy code written by a foreign team.',
      'Making a name mask that only appears if the full name of a prize is not visible.',
      'Customizing the Arabic version of the site to make it go from left -> right to right -> left.',
      'Creating a sophisticated touch-scroll behavior for the rewards modal and maintaining the position change with left/right arrows at the same time.',
      'Building a small styleless component library after finishing the project.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 6,
    name: 'Call of Duty Mobile - Token Draw',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-3.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-blur.jpg',
    descriptions: [
      'Users can spend a few coins to do 1 or multiple draws.',
      'Users can draw one jackpot if they receive a token from the drawing process.',
      'Users can exchange 3 items they got from the event for another draw.',
      'Users can press a quick-select button and have the event select for them.',
      'Users claim the items they got from the event.',
    ],
    challenges: [
      'Finding the snippet of code that causes the whole page to crash. (Turns out when using CSS filter property on too many items on the same page. The computation will overwhelm the page.',
      'Making sure users get correct results when pressing the quick select button and when they undo it by designing a customed data structure.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 7,
    name: 'Call of Duty Mobile - Two Layer Gacha',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/twolayer-gacha-1.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/twolayer-gacha-blur.jpg',
    descriptions: [
      'Users can spend a few coins to do 1 or multiple draws.',
      'Users will get an item from the right section when they perform a draw.',
      'Users will be able to draw from the left section if they get a key from the right section.',
    ],
    challenges: [
      'Creating an animation process that factors in API response time and user experience.',
      'Dealing with in-game browser issues that cannot be reproduced in other mainstream browsers by using different methods to simulate CSS active behavior on mobile.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 8,
    name: 'League of Legends - Chessboard',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-3.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-1.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-blur.jpg',
    descriptions: [
      'Users can select a jackpot.',
      'Users can spend a few coins to do 1 draw.',
      'Users will be closer to the jackpot they selected each time they draw.',
    ],
    challenges: [
      'Creating a 3D layout.',
      'Handling blurry-image issues in the in-game browser by moving images outside of the same layer as its wrapper.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 9,
    name: 'League of Legends - Choose Gacha',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-3.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-blur.jpg',
    descriptions: [
      'Users can select 9 small prizes and 1 jackpot, then proceed to the drawing process.',
      'Users can spend some coins to draw from the previously selected prize pool.',
      'Users can get milestone rewards when reaching certain thresholds.',
      'Users can spend some coins to reselect the prizes.',
    ],
    challenges: [
      'Handling keyword search for Vietnamese by normalizing the strings and replacing excess Unicode.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 10,
    name: 'Arena of Valor - AOVxUltraman',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-3.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-blur.jpg',
    descriptions: [
      'Users can sign-in each day and randomly get 2 pieces of the Ultraman skin, 1 for share, and 1 for themselves.',
      'Users can share the pieces of the Ultraman skin with friends or get pieces from their friends by entering sharing code.',
      'Users can interact with the application from their browsers or in-game.',
    ],
    challenges: [
      'Integrating with an in-game mechanism called the "ilua". We needed to instruct non-technical colleagues to correctly configure the ilua to interact with our application.',
      'Updating our internal auth library to fit the specific need for this game.',
      'Designing routing user experience with the minimum specification.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 11,
    name: 'Call of Duty Mobile - Refresh Gacha',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/refresh-gacha-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/refresh-gacha-2.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/refresh-gacha-blur.jpg',
    descriptions: [
      'Users can select a jackpot and start the drawing process.',
      'Users can spend some coins and do 1 draw.',
      'The items on the board will refresh after each draw.',
      'Users can refresh any item with a lower price.',
      'Users will be prompt to select a new jackpot and start the process again if they get the one they first selected.',
    ],
    challenges: [
      'Building a revenue event for the first time.',
      'Coming up with clarifying questions early on to make sure how we handle edge cases fit the expectation of the stakeholders.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
  {
    id: 12,
    name: 'Fairy Tale Mobile - Preregistration site',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-11.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-10.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-9.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-8.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-7.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-6.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-blur.jpg',
    descriptions: [
      'Users can pre-register to our new game by entering their phone numbers or emails.',
      'Users can join or create groups to recruit fellow players.',
    ],
    challenges: [
      'Improving web performance to make sure our complex animation is not janky.',
      'Customizing the user flow to cater to multiple different regional requirements.',
      'Debugging GA tracking bug that occurred after login redirect by updating our login flow.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
    techStackIcons: ['vue', 'javascript', 'sass'],
  },
];

export { garenaProjects };
