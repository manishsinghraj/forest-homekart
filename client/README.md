![Alt text](image.png)

`npm install react-icons --save`

`npm install reactstrap react react-dom`
`npm install --save bootstrap`


![Alt text](image-1.png)


start of code

create pages folder
add home, shop, cart, productDetails, checkout, login, signup

create routers folder > Routers.js > add the above pages using react-router-dom

create Header and footer folder  and Layout Folder.

# Header


new learn -

to make one of the selected item to apply specif class we can pass fn to className

```js 
 {
                    nav_links.map((item, index) =>
                    (<li key={index} >
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? "navigation__active" : ""}>{item.name}</NavLink>
                    </li>
                    ))
                  }
```

# title change -Not worked


# home page

