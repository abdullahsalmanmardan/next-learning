1. every file that correspond to a route must be named page.tsx
2. each folder correspond to the path segment in the browser url.
3. app folder ma jo page.tsx wo root ha
4. for all other we need to create folder and then create name for it about-> page.tsx.
5. The layout.tsx file is used to define a consistent layout for multiple pages within a specific route segment.
   It allows you to share common UI elements like headers, footers, or sidebars across multiple pages.

nested routes:

1. folder ke ander folder our us ma page.tsx
2. dynamic nested route

- product folder daikh lena.

catch all segments
look for docs folder,
helpful when creating nested routes infinites, now we have to create 1 only
docs/feature1/concept1 etc.

file colocation: 11 video;

- a route is not publically accessible if page.tsx is not present in it
- if we want to send something on the browser it should be default exported component.

private folder: lec12
private implementation details and it should not be considered by routing system.
[_foldername] \_ make folder private.

Route group.

- allow us to logically group our routes and project files without affecting
- url path structure. (authentication routes)
- instead of seprate folder we will create a auth folder and add all of them.
- now auth/login ab sirf login show karna to (auth) folder ko asy kar dain gay
- it will be excluded from the url.

lec14 Layout:

- A layout is a UI that is shared between multiple pages in a app.

lec15 nested layout:

- us specified route ke liyay our layout show karna ho to.

lec 16 Route Group Layout:

- to organize a project in a manner that doesn't affect the url,
- to selectively apply a layout to certain segment while leaving the other unchanges.

lec17 metadata

- page metadata take preference( optimization in seo )
- we can also add dynamic metadata.

lec 19 navigation. see root \_layout.tsx

lec21 navigating Programatically

- see order folder

lec22 templates
layouts donot remount the shared components.
but what to do when we want to update the shared components.( then comes templates)
change the layout.tsx to template.tsx.

lec23 Loading Component

- in folder loading.tsx is responsible for Loading ( like react suspense)

lec23 error.tsx
see error.tsx in product review ( pori application break ni ho gi sirf wo children ki jaga ye show ho jay ga)

lec 28 parallel routes.

- allow simultaneous rendering of the multiple pages with the same layout.
- complex dashboard multiple compoents to be rendered in app folder.
- it will be done in layout.tsx
- Parallel routes are defined using a feature called slots.
- slots help sturcture our content in modular fashion (@folder naming convension.)
- each slot is passed as prop to its corresponding layout.tsx file.
- dashboard folder we create folder with @notifications and then page.tsx in them.
- indepedent route handling, each pages has its own loading and error.

lec29 Unmatched Routes.

- dashboard ma hum 1 component se dosry component ma ja rhy hain.
- nextjs retians the previously active state of a slot regardless of changes in the url.
- on page reload, nextjs looks for default.tsx with each unmatched slot.
- it provide the default content that nextjs will render in the same userinterface.
- if default.tsx is missing 404 will be shown.
- create default.tsx in each slot and replicate pages.tsx in it.

lec30 - conditional Routes.

- conditionally render the template in parallel route.

lec31 Intercepting Routes.

- allow you to intercept or stop the default routing behavior to present an alternative view or component when navigating through ui.
- login button pe click kiya to login modal show ho gaya, url b chnage hoa jab usy reload kiya to pora login page show ho gaya.

lec 34-38 get request

- see comments folder.
