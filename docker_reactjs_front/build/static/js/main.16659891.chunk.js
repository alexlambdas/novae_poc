(this.webpackJsonpdocker_reactjs_front=this.webpackJsonpdocker_reactjs_front||[]).push([[0],{10:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(30),s=n.n(r),o=n(2),c=n(11),l=n(4),d=n(3),p=n(8),u=n.n(p),x="/main",b="/query/users",j="/create/user",h="/update/user",f="/query/credit/cards",m="/create/credit/card",y="/update/credit/card",O="/error",v={default:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"66px",paddingLeft:"30px",paddingRight:"50px",backgroundColor:"#00b8d4",boxShadow:"0px 6px 8px -5px rgba(0,0,0,0.64)"},menuLeft:{display:"flex",alignItems:"center",justifyContent:"center"},menuLeftItem:{cursor:"pointer",position:"relative",marginRight:"30px"},menuRight:{display:"flex",alignItems:"center",justifyContent:"center"},menuRightItem:{cursor:"pointer",position:"relative",marginRight:"30px"},circleHoverMDIcon:{position:"absolute",top:"-7px",left:"-8px",borderRadius:"50%",height:"53px",width:"53px"},circleHoverCustomIcon:{position:"absolute",top:"-11px",left:"-11px",borderRadius:"50%",height:"53px",width:"53px"},sidenavOpen:{height:"100%",width:"250px",position:"fixed",zIndex:"1",top:"0",left:"0",backgroundColor:"#ffffff",overflowX:"hidden",paddingTop:"60px",transition:"0.25s"},sidenavClose:{height:"100%",width:"0px",position:"fixed",zIndex:"1",top:"0",left:"0",backgroundColor:"#ffffff",overflowX:"hidden",paddingTop:"60px",transition:"0.25s"},sidenavOpen_a:{padding:"8px 8px 8px 20px",textDecoration:"none",fontSize:"16px",color:"#818181",display:"block",transition:"0.3s"},sidenavOpen_a_custom:{padding:"8px 8px 8px 18px",textDecoration:"none",fontSize:"16px",color:"#818181",display:"block",transition:"0.3s"},sidenavOpen_closebtn:{padding:"8px 8px 8px 32px",textDecoration:"none",color:"#818181",display:"block",transition:"0.3s",position:"absolute",top:"0",right:"25px",fontSize:"36px",marginLeft:"50px",cursor:"pointer"},sideNavItemMDIcon:{display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"15px",height:"60px"},sideNavItemMDIconSize:{width:"40px"},sideNavItemCustomIcon:{display:"flex",paddingLeft:"21px",flexDirection:"row",alignItems:"center",height:"60px"},tooltipMDIcon:{position:"absolute",left:"-35px",top:"60px",height:"20px",width:"100px",color:"white",borderRadius:"3px",textAlign:"center",padding:"5px",backgroundColor:"#263238",opacity:"0.9",transition:"0.4s ease",zIndex:"1"},tooltipMDIconHidden:{visibility:"hidden",position:"absolute",left:"-35px",top:"45px",height:"20px",width:"100px",color:"white",borderRadius:"3px",textAlign:"center",padding:"5px",backgroundColor:"#263238",opacity:"0.1",transition:"0.4s ease",zIndex:"1"},tooltipCustomIcon:{position:"absolute",left:"-35px",top:"57px",height:"20px",width:"100px",color:"white",borderRadius:"3px",textAlign:"center",padding:"5px",backgroundColor:"#263238",opacity:"0.9",transition:"0.4s ease"},tooltipCustomIconHidden:{visibility:"hidden",position:"absolute",left:"-35px",top:"45px",height:"20px",width:"100px",color:"white",borderRadius:"3px",textAlign:"center",padding:"5px",backgroundColor:"#263238",opacity:"0.1",transition:"0.4s ease"}},g=(n(10),n(0));var _=function(e){var t=e.openNav,n=e.handleOpenNav,i=function(){return n()},a=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:v.sidenavOpen_closebtn,onClick:i,children:Object(g.jsx)(u.a,{icon:"close",color:"#616161",size:"medium"})}),Object(g.jsxs)("div",{style:v.sideNavItemMDIcon,className:"sidenav_item",onClick:i,children:[Object(g.jsx)("div",{style:v.sideNavItemMDIconSize,children:Object(g.jsx)(u.a,{icon:"home",color:"#00b8d4",size:"medium"})}),Object(g.jsx)(c.b,{style:v.sidenavOpen_a,to:x,children:"Principal"})]}),Object(g.jsxs)("div",{style:v.sideNavItemMDIcon,className:"sidenav_item",onClick:i,children:[Object(g.jsx)("div",{style:v.sideNavItemMDIconSize,children:Object(g.jsx)(u.a,{icon:"person_pin",color:"#00b8d4",size:"medium"})}),Object(g.jsx)(c.b,{style:v.sidenavOpen_a,to:b,children:"Usuarios"})]}),Object(g.jsxs)("div",{style:v.sideNavItemMDIcon,className:"sidenav_item",onClick:i,children:[Object(g.jsx)("div",{style:v.sideNavItemMDIconSize,children:Object(g.jsx)(u.a,{icon:"add_box",color:"#00b8d4",size:"medium"})}),Object(g.jsx)(c.b,{style:v.sidenavOpen_a,to:j,children:"Crear Usuario"})]}),Object(g.jsxs)("div",{style:v.sideNavItemMDIcon,className:"sidenav_item",onClick:i,children:[Object(g.jsx)("div",{style:v.sideNavItemMDIconSize,children:Object(g.jsx)(u.a,{icon:"update",color:"#00b8d4",size:"medium"})}),Object(g.jsx)(c.b,{style:v.sidenavOpen_a,to:h,children:"Actualizar Usuario"})]}),Object(g.jsxs)("div",{style:v.sideNavItemMDIcon,className:"sidenav_item",onClick:i,children:[Object(g.jsx)("div",{style:v.sideNavItemMDIconSize,children:Object(g.jsx)(u.a,{icon:"credit_card",color:"#00b8d4",size:"medium"})}),Object(g.jsx)(c.b,{style:v.sidenavOpen_a,to:f,children:"Tarjetas de Cr\xe9dito"})]}),Object(g.jsxs)("div",{style:v.sideNavItemMDIcon,className:"sidenav_item",onClick:i,children:[Object(g.jsx)("div",{style:v.sideNavItemMDIconSize,children:Object(g.jsx)(u.a,{icon:"add_box",color:"#00b8d4",size:"medium"})}),Object(g.jsx)(c.b,{style:v.sidenavOpen_a,to:m,children:"Crear Tarjeta"})]}),Object(g.jsxs)("div",{style:v.sideNavItemMDIcon,className:"sidenav_item",onClick:i,children:[Object(g.jsx)("div",{style:v.sideNavItemMDIconSize,children:Object(g.jsx)(u.a,{icon:"update",color:"#00b8d4",size:"medium"})}),Object(g.jsx)(c.b,{style:v.sidenavOpen_a,to:y,children:"Actualizar Tarjeta"})]})]}),r=Object(g.jsx)("div",{style:v.sidenavOpen,children:a}),s=Object(g.jsx)("div",{style:v.sidenavClose,children:a});return Object(g.jsxs)("nav",{style:v.default,children:[t?r:s,Object(g.jsx)("div",{style:v.menuLeft,children:Object(g.jsxs)("div",{style:v.menuLeftItem,onClick:i,children:[Object(g.jsx)(u.a,{icon:"menu",color:"#FAFAFA",size:"medium"}),Object(g.jsx)("div",{style:v.circleHoverMDIcon,className:"circle_hover"})]})}),Object(g.jsx)("div",{style:v.menuRight})]})},T={containerSearchBar:{display:"flex",flexDirection:"row"},inputTextSearch:{width:"350px",marginLeft:"10px",marginRight:"10px",border:"none",borderBottom:"3px solid #00b8d4",backgroundColor:"#e3f2fd",borderTopLeftRadius:"5px",borderTopLeftRight:"5px",textAlign:"center",color:"#616161"},inputTextSearchDisable:{width:"350px",marginLeft:"10px",marginRight:"10px",border:"none",borderBottom:"3px solid #757575",backgroundColor:"#f5f5f5",borderTopLeftRadius:"5px",borderTopLeftRight:"5px"},btnSearchBar:{width:"100px",border:"none",borderRadius:"5px",color:"white",fontFamily:"'Ubuntu'",fontSize:"18px",cursor:"pointer"},btnResetBar:{width:"100px",border:"none",borderRadius:"5px",color:"white",fontFamily:"'Ubuntu'",fontSize:"18px",cursor:"pointer",marginLeft:"20px"},btnSearchBarDisable:{width:"100px",border:"none",borderRadius:"5px",color:"white",fontFamily:"'Ubuntu'",fontSize:"18px",backgroundColor:"#bdbdbd"}};var S=function(e){var t=Object(i.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=e.placeholder,c=e.disableBar,l=e.handleInputSearch,d=e.handleSearch,p=e.handleReset,x=Object(g.jsxs)("div",{style:T.containerSearchBar,children:[Object(g.jsx)(u.a,{icon:"search",color:"#616161",size:"medium"}),Object(g.jsx)("input",{onChange:function(e){r(e.target.value),l(e)},style:T.inputTextSearch,placeholder:s,value:a,className:"input_search_bar",type:"text"}),Object(g.jsx)("button",{onClick:function(){d()},style:T.btnSearchBar,className:"btn_search_bar",children:"buscar"}),Object(g.jsx)("button",{onClick:function(){r(""),p()},style:T.btnResetBar,className:"btn_search_bar",children:"Limpiar"})]}),b=Object(g.jsxs)("div",{style:T.containerSearchBar,children:[Object(g.jsx)(u.a,{icon:"search",color:"#616161",size:"medium"}),Object(g.jsx)("input",{style:T.inputTextSearchDisable,placeholder:s,className:"input_search_bar",type:"text",disabled:!0}),Object(g.jsx)("button",{style:T.btnSearchBarDisable,className:"btn_search_bar",disabled:!0,children:"buscar"})]});return Object(g.jsx)(g.Fragment,{children:c?b:x})},N={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerForm:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"40px"},titleForm:{textAlign:"center",fontSize:"24px",color:"white",fontFamily:"'Ubuntu'",backgroundColor:"#f50057",paddingTop:"18px",paddingBottom:"18px"},containerInputs:{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px",fontFamily:"'Ubuntu'",marginTop:"20px"},formSaveUser:{display:"flex",flexDirection:"Column",border:"1px solid #f50057",borderRadius:"5px",width:"400px",height:"200px"},inputDataUser:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px"},labelTypeText:{color:"#37474f",fontSize:"16px"},spanImportant:{color:"#f50057",fontSize:"20px"},inputTypeText:{marginLeft:"50px",height:"30px",width:"270px",border:"1px solid #f50057",borderRadius:"5px",fontSize:"16px",color:"#616161",textAlign:"center"},containerButton:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"10px"},buttonSave:{height:"30px",width:"270px",border:"1px solid #f50057",color:"white",fontSize:"16px",borderRadius:"5px",cursor:"pointer",fontFamily:"'Ubuntu'"}};var I=function(e){var t=e.setShowError,n=e.description,i=Object(g.jsxs)("div",{style:N.formSaveUser,children:[Object(g.jsx)("div",{style:N.titleForm,children:"Error en la Operaci\xf3n"}),Object(g.jsx)("div",{style:N.containerInputs,children:n}),Object(g.jsx)("div",{style:N.containerButton,children:Object(g.jsx)("button",{style:N.buttonSave,className:"btn_error_credit_card",onClick:function(){t(!1)},children:"Regresar"})})]});return Object(g.jsx)("div",{children:Object(g.jsx)("div",{style:N.containerForm,children:i})})},D={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerForm:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"20px"},titleForm:{textAlign:"center",fontSize:"24px",color:"white",fontFamily:"'Ubuntu'",backgroundColor:"#e040fb",paddingTop:"18px",paddingBottom:"18px"},containerInputs:{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"},formSaveUser:{display:"flex",flexDirection:"Column",border:"1px solid #e040fb",borderRadius:"5px"},inputDataUser:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px"},labelTypeText:{color:"#37474f",fontSize:"16px"},spanImportant:{color:"#f50057",fontSize:"20px"},inputTypeText:{marginLeft:"50px",height:"30px",width:"270px",border:"1px solid #03a9f4",borderRadius:"5px",fontSize:"16px",color:"#616161",textAlign:"center"},containerButton:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"},buttonSave:{height:"30px",width:"270px",border:"1px solid #e040fb",color:"white",fontSize:"16px",borderRadius:"5px",cursor:"pointer",fontFamily:"'Ubuntu'"}};var w=function(e){var t=Object(i.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(i.useState)(!1),c=Object(o.a)(s,2),l=c[0],p=c[1],u=Object(i.useState)(""),x=Object(o.a)(u,2),b=x[0],j=x[1],h=Object(i.useState)([{card_number:"",card_type:"",dni_user:""}]),f=Object(o.a)(h,2),m=f[0],y=f[1],O=e.openNav,v=e.handleOpenNav,T=Object(g.jsxs)("form",{style:D.formSaveUser,onSubmit:function(e){e.preventDefault(),p(!0),j("Aun no esta implementada la funcionalidad de actualizar una tarjeta de cr\xe9dito")},children:[Object(g.jsx)("div",{style:D.titleForm,children:"Actualizar Tarjeta de Cr\xe9dito"}),Object(g.jsxs)("div",{style:D.containerInputs,children:[Object(g.jsxs)("div",{style:D.inputDataUser,children:[Object(g.jsxs)("label",{style:D.labelTypeText,children:["Identificaci\xf3n (DNI) ",Object(g.jsx)("span",{style:D.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:D.inputTypeText,defaultValue:m[0].dni_user,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:D.inputDataUser,children:[Object(g.jsxs)("label",{style:D.labelTypeText,children:["Tipo de tarjeta ",Object(g.jsx)("span",{style:D.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:D.inputTypeText,defaultValue:m[0].card_type,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:D.inputDataUser,children:[Object(g.jsxs)("label",{style:D.labelTypeText,children:["Numero de Tarjeta ",Object(g.jsx)("span",{style:D.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:D.inputTypeText,defaultValue:m[0].card_number,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:D.containerButton,children:[Object(g.jsx)("div",{}),Object(g.jsx)("button",{style:D.buttonSave,className:"btn_update_credit_card",children:"Actualizar"})]})]})]});return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{openNav:O,handleOpenNav:v}),Object(g.jsx)("div",{style:D.containerSearchBar,children:Object(g.jsx)(S,{placeholder:"buscar tarjeta por N\xfamero",disableBar:!1,handleInputSearch:function(e){r(e.target.value)},handleSearch:function(){var e=0===a.length?0:1;0===e&&(p(!0),j("Se debe ingresar un # de Tarjeta para buscar!")),1===e&&(isNaN(parseInt(a,10))?(p(!0),j("El valor de busqueda debe ser solo n\xfamerico")):fetch("http://localhost:6001/api/v1/card/".concat(a)).then((function(e){return e.json()})).then((function(e){return y([Object(d.a)({},e)])})).catch((function(e){p(!0),j("No existe una tarjeta de cr\xe9dito con el # ".concat(a))})))},handleReset:function(){y([{card_number:"",card_type:"",dni_user:""}]),r("")}})}),!0===l?Object(g.jsx)("div",{style:D.containerForm,children:Object(g.jsx)(I,{description:b,setShowError:p})}):Object(g.jsx)("div",{style:D.containerForm,children:T})]})},C={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerForm:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"40px"},titleForm:{textAlign:"center",fontSize:"24px",color:"white",fontFamily:"'Ubuntu'",backgroundColor:"#00bfa5",paddingTop:"18px",paddingBottom:"18px"},containerInputs:{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px",fontFamily:"'Ubuntu'",marginTop:"20px"},formSaveUser:{display:"flex",flexDirection:"Column",border:"1px solid #00bfa5",borderRadius:"5px",width:"400px",height:"200px"},inputDataUser:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px"},labelTypeText:{color:"#37474f",fontSize:"16px"},spanImportant:{color:"#f50057",fontSize:"20px"},inputTypeText:{marginLeft:"50px",height:"30px",width:"270px",border:"1px solid #f50057",borderRadius:"5px",fontSize:"16px",color:"#616161",textAlign:"center"},containerButton:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"10px"},buttonSave:{height:"30px",width:"270px",border:"1px solid #00bfa5",color:"white",fontSize:"16px",borderRadius:"5px",cursor:"pointer",fontFamily:"'Ubuntu'"}};var U=function(e){var t=e.setIsReturn,n=e.description,i=Object(g.jsxs)("div",{style:C.formSaveUser,children:[Object(g.jsx)("div",{style:C.titleForm,children:"Operaci\xf3n Exitosa !"}),Object(g.jsx)("div",{style:C.containerInputs,children:n}),Object(g.jsx)("div",{style:C.containerButton,children:Object(g.jsx)("button",{style:C.buttonSave,className:"btn_success_credit_card",onClick:function(){t(!1)},children:"Regresar"})})]});return Object(g.jsx)("div",{children:Object(g.jsx)("div",{style:C.containerForm,children:i})})},z={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerForm:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"20px"},titleForm:{textAlign:"center",fontSize:"24px",color:"white",fontFamily:"'Ubuntu'",backgroundColor:"#e040fb",paddingTop:"18px",paddingBottom:"18px"},containerInputs:{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"},formSaveUser:{display:"flex",flexDirection:"Column",border:"1px solid #e040fb",borderRadius:"5px"},inputDataUser:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px"},labelTypeText:{color:"#37474f",fontSize:"16px"},spanImportant:{color:"#f50057",fontSize:"20px"},inputTypeText:{marginLeft:"50px",height:"30px",width:"270px",border:"1px solid #03a9f4",borderRadius:"5px",fontSize:"16px",color:"#616161",textAlign:"center"},containerButton:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"},buttonSave:{height:"30px",width:"270px",border:"1px solid #e040fb",color:"white",fontSize:"16px",borderRadius:"5px",cursor:"pointer",fontFamily:"'Ubuntu'"}};var R=function(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(i.useState)(""),c=Object(o.a)(s,2),l=c[0],p=c[1],u=Object(i.useState)(!1),x=Object(o.a)(u,2),b=x[0],j=x[1],h=Object(i.useState)({card_number:"",card_type:"",dni_user:""}),f=Object(o.a)(h,2),m=f[0],y=f[1],O=e.openNav,v=e.handleOpenNav,T=function(){r(!0),p("No se puede guardar la tarjeta de cr\xe9dito, por favor verificar todos los datos!"),y({card_number:"",card_type:"",dni_user:""})},N=Object(g.jsxs)("form",{style:z.formSaveUser,onSubmit:function(e){e.preventDefault(),fetch("http://localhost:6001/api/v1/card",{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json"}}).then((function(e){return e.status})).then((function(e){if(500===e)throw T;if(200!==e)throw T;y({card_number:"",card_type:"",dni_user:""}),p("Se guarda la tarjeta de cr\xe9dito exitosamente"),j(!0)})).catch((function(e){r(!0),p("No se puede la tarjeta de cr\xe9dito, por favor verificar todos los datos!"),y({card_number:"",card_type:"",dni_user:""})}))},children:[Object(g.jsx)("div",{style:z.titleForm,children:"Crear nueva Tarjeta de Cr\xe9dito"}),Object(g.jsxs)("div",{style:z.containerInputs,children:[Object(g.jsxs)("div",{style:z.inputDataUser,children:[Object(g.jsxs)("label",{style:z.labelTypeText,children:["Identificaci\xf3n (DNI) ",Object(g.jsx)("span",{style:z.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:z.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{dni_user:t}))},defaultValue:m.dni_user,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:z.inputDataUser,children:[Object(g.jsxs)("label",{style:z.labelTypeText,children:["Tipo de tarjeta ",Object(g.jsx)("span",{style:z.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:z.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{card_type:t}))},defaultValue:m.card_type,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:z.inputDataUser,children:[Object(g.jsxs)("label",{style:z.labelTypeText,children:["Numero de Tarjeta ",Object(g.jsx)("span",{style:z.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:z.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{card_number:t}))},defaultValue:m.card_number,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:z.containerButton,children:[Object(g.jsx)("div",{}),Object(g.jsx)("button",{style:z.buttonSave,className:"btn_update_credit_card",children:"Guardar"})]})]})]});return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{openNav:O,handleOpenNav:v}),Object(g.jsx)("div",{style:z.containerSearchBar,children:Object(g.jsx)(S,{placeholder:"barra de busqueda deshabilitada",disableBar:!0})}),!0===a?Object(g.jsx)(I,{description:l,setShowError:r}):Object(g.jsx)("div",{style:z.containerForm,children:!0===b?Object(g.jsx)(U,{description:l,setIsReturn:j}):Object(g.jsx)("div",{children:N})})]})},B={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerQueryUsers:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},noteImportant:{display:"flex",justifyContent:"center",marginTop:"10px",fontFamily:"'Ubuntu'"},spanImportant:{marginRight:"7px",color:"#f50057"},titleTable:{display:"flex",flexDirection:"row",justifyContent:"center",padding:"10px",backgroundColor:"#f8bbd0",borderRadius:"5px",fontFamily:"'Ubuntu'",fontSize:"16px"},dataTable:{display:"flex",flexDirection:"row",fontFamily:"'Ubuntu'",padding:"10px",borderBottom:"1px solid #00b8d4"},itemId:{width:"150px"},itemDni:{width:"220px"},itemNames:{width:"200px"},itemLastNames:{width:"240px"},itemDelete:{width:"180px"},btnDeleteUser:{fontFamily:"'Ubuntu'",padding:"8px",color:"white",backgroundColor:"#f50057",border:"none",outline:"none",borderRadius:"4px",cursor:"pointer"}};var F=function(e){var t=Object(i.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(i.useState)([]),c=Object(o.a)(s,2),l=c[0],p=c[1],u=Object(i.useState)(!1),x=Object(o.a)(u,2),b=x[0],j=x[1],h=Object(i.useState)(""),f=Object(o.a)(h,2),m=f[0],y=f[1],O=e.openNav,v=e.handleOpenNav,T=function(){j(!0),y("No se puede eliminar la tarjeta de cr\xe9dito!")},N=function(e){fetch("http://localhost:6001/api/v1/card/".concat(e),{method:"DELETE"}).then((function(e){return e.status})).then((function(e){if(500===e)throw T;200===e&&(j(!1),fetch("http://localhost:6001/api/v1/card").then((function(e){return e.json()})).then((function(e){return p(e)})))})).catch((function(e){j(!0),y("No se puede eliminar la tarjeta de Cr\xe9dito!")}))};return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{openNav:O,handleOpenNav:v}),Object(g.jsx)("div",{style:B.containerSearchBar,children:Object(g.jsx)(S,{placeholder:"buscar tarjeta por n\xfamero",disableBar:!1,handleInputSearch:function(e){r(e.target.value)},handleSearch:function(){var e=0===a.length?0:1;0===e&&fetch("http://localhost:6001/api/v1/card").then((function(e){return e.json()})).then((function(e){return p(e)})),1===e&&(isNaN(parseInt(a,10))?(j(!0),y("El valor de busqueda debe ser solo n\xfamerico")):fetch("http://localhost:6001/api/v1/card/".concat(a)).then((function(e){return e.json()})).then((function(e){return p([Object(d.a)({},e)])})).catch((function(e){j(!0),y("No existe tarjeta de credito con el numero ".concat(a))})))},handleReset:function(){r(""),p([])}})}),Object(g.jsxs)("div",{style:B.noteImportant,children:[Object(g.jsx)("span",{style:B.spanImportant,children:"IMPORTANTE*: "}),"Si en la barra no hay # de tarjeta , se buscan todas las Tarjetas"]}),!0===b?Object(g.jsx)(I,{description:m,setShowError:j}):Object(g.jsxs)("div",{style:B.containerQueryUsers,children:[Object(g.jsxs)("div",{style:B.titleTable,children:[Object(g.jsx)("div",{style:B.itemId,children:"ID de Tarjeta"}),Object(g.jsx)("div",{style:B.itemDni,children:"N\xdaMERO de Tarjeta"}),Object(g.jsx)("div",{style:B.itemNames,children:"TIPO de Tarjeta"}),Object(g.jsx)("div",{style:B.itemLastNames,children:"DNI de Usuario"}),Object(g.jsx)("div",{style:B.itemDelete,children:"ELINIMAR un Usuario"})]}),l.map((function(e,t){return Object(g.jsxs)("div",{style:B.dataTable,children:[Object(g.jsx)("div",{style:B.itemId,children:e.id}),Object(g.jsx)("div",{style:B.itemDni,children:e.card_number}),Object(g.jsx)("div",{style:B.itemNames,children:e.card_type}),Object(g.jsx)("div",{style:B.itemLastNames,children:e.dni_user}),Object(g.jsx)("div",{style:B.itemDelete,children:Object(g.jsx)("button",{style:B.btnDeleteUser,onClick:function(){return N(e.card_number)},children:"Eliminar"})})]},t)}))]})]})},k={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerForm:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"20px"},titleForm:{textAlign:"center",fontSize:"24px",color:"white",fontFamily:"'Ubuntu'",backgroundColor:"#f06292",paddingTop:"18px",paddingBottom:"18px"},containerInputs:{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"},formSaveUser:{display:"flex",flexDirection:"Column",border:"1px solid #f06292",borderRadius:"5px"},inputDataUser:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px"},labelTypeText:{color:"#37474f",fontSize:"16px"},spanImportant:{color:"#f50057",fontSize:"20px"},inputTypeText:{marginLeft:"50px",height:"30px",width:"270px",border:"1px solid #03a9f4",borderRadius:"5px",fontSize:"16px",color:"#616161",textAlign:"center"},containerButton:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"},buttonSave:{height:"30px",width:"270px",border:"1px solid #f06292",color:"white",fontSize:"16px",borderRadius:"5px",cursor:"pointer",fontFamily:"'Ubuntu'"}};var L=function(e){var t=Object(i.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(i.useState)(!1),c=Object(o.a)(s,2),l=c[0],p=c[1],u=Object(i.useState)(""),x=Object(o.a)(u,2),b=x[0],j=x[1],h=Object(i.useState)([{dni:"",first_name_1:"",first_name_2:"",last_name_1:"",last_name_2:""}]),f=Object(o.a)(h,2),m=f[0],y=f[1],O=e.openNav,v=e.handleOpenNav,T=Object(g.jsxs)("form",{style:k.formSaveUser,onSubmit:function(e){e.preventDefault(),p(!0),j("Aun no esta implementada la funcionalidad de actualizar un usuario")},children:[Object(g.jsx)("div",{style:k.titleForm,children:"Actualizar Usuario"}),Object(g.jsxs)("div",{style:k.containerInputs,children:[Object(g.jsxs)("div",{style:k.inputDataUser,children:[Object(g.jsxs)("label",{style:k.labelTypeText,children:["Identificaci\xf3n (DNI) ",Object(g.jsx)("span",{style:k.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:k.inputTypeText,defaultValue:m[0].dni,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:k.inputDataUser,children:[Object(g.jsxs)("label",{style:k.labelTypeText,children:["Primer Nombre ",Object(g.jsx)("span",{style:k.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:k.inputTypeText,defaultValue:m[0].first_name_1,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:k.inputDataUser,children:[Object(g.jsx)("label",{style:k.labelTypeText,children:"Segundo Nombre"}),Object(g.jsx)("input",{style:k.inputTypeText,defaultValue:m[0].first_name_2,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:k.inputDataUser,children:[Object(g.jsxs)("label",{style:k.labelTypeText,children:["Primer Apellido ",Object(g.jsx)("span",{style:k.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:k.inputTypeText,defaultValue:m[0].last_name_1,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:k.inputDataUser,children:[Object(g.jsx)("label",{style:k.labelTypeText,children:"Segundo Apellido"}),Object(g.jsx)("input",{style:k.inputTypeText,defaultValue:m[0].last_name_2,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:k.containerButton,children:[Object(g.jsx)("div",{}),Object(g.jsx)("button",{style:k.buttonSave,className:"btn_save_user",children:"Actualizar"})]})]})]});return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{openNav:O,handleOpenNav:v}),Object(g.jsx)("div",{style:k.containerSearchBar,children:Object(g.jsx)(S,{placeholder:"buscar usuario por DNI",disableBar:!1,handleInputSearch:function(e){r(e.target.value)},handleSearch:function(){var e=0===a.length?0:1;0===e&&(p(!0),j("Se debe ingresar un DNI para buscar!")),1===e&&(isNaN(parseInt(a,10))?(p(!0),j("El valor de busqueda debe ser solo n\xfamerico")):fetch("http://localhost:6001/api/v1/user/".concat(a)).then((function(e){return e.json()})).then((function(e){return y([Object(d.a)({},e)])})).catch((function(e){p(!0),j("No existe un usuario con el DNI ".concat(a))})))},handleReset:function(){y([{dni:"",first_name_1:"",first_name_2:"",last_name_1:"",last_name_2:""}]),r("")}})}),!0===l?Object(g.jsx)("div",{style:k.containerForm,children:Object(g.jsx)(I,{description:b,setShowError:p})}):Object(g.jsx)("div",{style:k.containerForm,children:T})]})},A={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerForm:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"20px"},titleForm:{textAlign:"center",fontSize:"24px",color:"white",fontFamily:"'Ubuntu'",backgroundColor:"#f06292",paddingTop:"18px",paddingBottom:"18px"},containerInputs:{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"},formSaveUser:{display:"flex",flexDirection:"Column",border:"1px solid #f06292",borderRadius:"5px"},inputDataUser:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px"},labelTypeText:{color:"#37474f",fontSize:"16px"},spanImportant:{color:"#f50057",fontSize:"20px"},inputTypeText:{marginLeft:"50px",height:"30px",width:"270px",border:"1px solid #03a9f4",borderRadius:"5px",fontSize:"16px",color:"#616161",textAlign:"center"},containerButton:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"},buttonSave:{height:"30px",width:"270px",border:"1px solid #f06292",color:"white",fontSize:"16px",borderRadius:"5px",cursor:"pointer",fontFamily:"'Ubuntu'"}};var M=function(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(i.useState)(""),c=Object(o.a)(s,2),l=c[0],p=c[1],u=Object(i.useState)(!1),x=Object(o.a)(u,2),b=x[0],j=x[1],h=Object(i.useState)({dni:"",first_name_1:"",first_name_2:"",last_name_1:"",last_name_2:""}),f=Object(o.a)(h,2),m=f[0],y=f[1],O=e.openNav,v=e.handleOpenNav,T=function(){r(!0),p("No se puede guardar el usuario, por favor verificar todos los datos!"),y({dni:"",first_name_1:"",first_name_2:"",last_name_1:"",last_name_2:""})},N=Object(g.jsxs)("form",{style:A.formSaveUser,onSubmit:function(e){e.preventDefault(),fetch("http://localhost:6001/api/v1/user",{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json"}}).then((function(e){return e.status})).then((function(e){if(500===e)throw T;if(200!==e)throw T;y({dni:"",first_name_1:"",first_name_2:"",last_name_1:"",last_name_2:""}),p("Se guarda el usuario exitosamente"),j(!0)})).catch((function(e){r(!0),p("No se puede guardar el usuario, por favor verificar todos los datos!"),y({dni:"",first_name_1:"",first_name_2:"",last_name_1:"",last_name_2:""})}))},children:[Object(g.jsx)("div",{style:A.titleForm,children:"Crear nuevo Usuario"}),Object(g.jsxs)("div",{style:A.containerInputs,children:[Object(g.jsxs)("div",{style:A.inputDataUser,children:[Object(g.jsxs)("label",{style:A.labelTypeText,children:["Identificaci\xf3n (DNI) ",Object(g.jsx)("span",{style:A.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:A.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{dni:t}))},defaultValue:m.dni,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:A.inputDataUser,children:[Object(g.jsxs)("label",{style:A.labelTypeText,children:["Primer Nombre ",Object(g.jsx)("span",{style:A.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:A.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{first_name_1:t}))},defaultValue:m.first_name_1,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:A.inputDataUser,children:[Object(g.jsx)("label",{style:A.labelTypeText,children:"Segundo Nombre"}),Object(g.jsx)("input",{style:A.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{first_name_2:t}))},defaultValue:m.first_name_2,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:A.inputDataUser,children:[Object(g.jsxs)("label",{style:A.labelTypeText,children:["Primer Apellido ",Object(g.jsx)("span",{style:A.spanImportant,children:"*"})]}),Object(g.jsx)("input",{style:A.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{last_name_1:t}))},defaultValue:m.last_name_1,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:A.inputDataUser,children:[Object(g.jsx)("label",{style:A.labelTypeText,children:"Segundo Apellido"}),Object(g.jsx)("input",{style:A.inputTypeText,onChange:function(e){var t=e.target.value;y(Object(d.a)(Object(d.a)({},m),{},{last_name_2:t}))},defaultValue:m.last_name_2,className:"input_save_user",type:"text"})]}),Object(g.jsxs)("div",{style:A.containerButton,children:[Object(g.jsx)("div",{}),Object(g.jsx)("button",{style:A.buttonSave,className:"btn_save_user",children:"Guardar"})]})]})]});return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{openNav:O,handleOpenNav:v}),Object(g.jsx)("div",{style:A.containerSearchBar,children:Object(g.jsx)(S,{placeholder:"barra de busqueda deshabilitada",disableBar:!0})}),!0===a?Object(g.jsx)(I,{description:l,setShowError:r}):Object(g.jsx)("div",{style:A.containerForm,children:!0===b?Object(g.jsx)(U,{description:l,setIsReturn:j}):Object(g.jsx)("div",{children:N})})]})},E={containerSearchBar:{display:"flex",flexDiretion:"row",justifyContent:"center",marginTop:"50px"},containerQueryUsers:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},noteImportant:{display:"flex",justifyContent:"center",marginTop:"10px",fontFamily:"'Ubuntu'"},spanImportant:{marginRight:"7px",color:"#f50057"},titleTable:{display:"flex",flexDirection:"row",justifyContent:"center",padding:"10px",backgroundColor:"#f8bbd0",borderRadius:"5px",fontFamily:"'Ubuntu'",fontSize:"16px"},dataTable:{display:"flex",flexDirection:"row",fontFamily:"'Ubuntu'",padding:"10px",borderBottom:"1px solid #00b8d4"},itemId:{width:"150px"},itemDni:{width:"150px"},itemNames:{width:"240px"},itemLastNames:{width:"240px"},itemDelete:{width:"200px"},btnDeleteUser:{fontFamily:"'Ubuntu'",padding:"8px",color:"white",backgroundColor:"#f50057",border:"none",outline:"none",borderRadius:"4px",cursor:"pointer"}};var P=function(e){var t=Object(i.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(i.useState)([]),c=Object(o.a)(s,2),l=c[0],p=c[1],u=Object(i.useState)(!1),x=Object(o.a)(u,2),b=x[0],j=x[1],h=Object(i.useState)(""),f=Object(o.a)(h,2),m=f[0],y=f[1],O=e.openNav,v=e.handleOpenNav,T=function(){j(!0),y("No se puede eliminar el usuario, tiene tarjetas de Cr\xe9dito asociadas!")},N=function(e){fetch("http://localhost:6001/api/v1/user/".concat(e),{method:"DELETE"}).then((function(e){return e.status})).then((function(e){if(500===e)throw T;200===e&&(j(!1),fetch("http://localhost:6001/api/v1/user").then((function(e){return e.json()})).then((function(e){return p(e)})))})).catch((function(e){j(!0),y("No se puede eliminar el usuario, tiene tarjetas de Cr\xe9dito asociadas!")}))};return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{openNav:O,handleOpenNav:v}),Object(g.jsx)("div",{style:E.containerSearchBar,children:Object(g.jsx)(S,{placeholder:"buscar usuario por identificaci\xf3n DNI",disableBar:!1,handleInputSearch:function(e){r(e.target.value)},handleSearch:function(){var e=0===a.length?0:1;0===e&&fetch("http://localhost:6001/api/v1/user").then((function(e){return e.json()})).then((function(e){return p(e)})),1===e&&(isNaN(parseInt(a,10))?(j(!0),y("El valor de busqueda debe ser solo n\xfamerico")):fetch("http://localhost:6001/api/v1/user/".concat(a)).then((function(e){return e.json()})).then((function(e){return p([Object(d.a)({},e)])})).catch((function(e){j(!0),y("No existe un usuario con el DNI ".concat(a))})))},handleReset:function(){p([]),r("")}})}),Object(g.jsxs)("div",{style:E.noteImportant,children:[Object(g.jsx)("span",{style:E.spanImportant,children:"IMPORTANTE*: "}),"Si en la barra de busqueda no hay ningun DNI, se buscan todos los usuarios"]}),!0===b?Object(g.jsx)(I,{description:m,setShowError:j}):Object(g.jsxs)("div",{style:E.containerQueryUsers,children:[Object(g.jsxs)("div",{style:E.titleTable,children:[Object(g.jsx)("div",{style:E.itemId,children:"ID de Usuario"}),Object(g.jsx)("div",{style:E.itemDni,children:"DNI de Usuario"}),Object(g.jsx)("div",{style:E.itemNames,children:"NOMBRES de Usuario"}),Object(g.jsx)("div",{style:E.itemLastNames,children:"APELLIDOS de Usuario"}),Object(g.jsx)("div",{style:E.itemDelete,children:"ELINIMAR un Usuario"})]}),l.map((function(e,t){return Object(g.jsxs)("div",{style:E.dataTable,children:[Object(g.jsx)("div",{style:E.itemId,children:e.id}),Object(g.jsx)("div",{style:E.itemDni,children:e.dni}),Object(g.jsx)("div",{style:E.itemNames,children:"".concat(e.first_name_1," ").concat(e.first_name_2)}),Object(g.jsx)("div",{style:E.itemLastNames,children:"".concat(e.last_name_1," ").concat(e.last_name_2)}),Object(g.jsx)("div",{style:E.itemDelete,children:Object(g.jsx)("button",{style:E.btnDeleteUser,onClick:function(){return N(e.dni)},children:"Eliminar"})})]},t)}))]})]})},V=n.p+"static/media/novae.0327b876.jpg",q={containerMainPage:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},containerImgMainPage:{marginTop:"50px"},imgMainPage:{borderRadius:"8px"},containerPersonalInfo:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},info1:{fontSize:"24px",fontFamily:"'Ubuntu'",color:"#0d47a1",marginTop:"12px"},info2:{fontSize:"24px",fontFamily:"'Ubuntu'",color:"#616161",marginTop:"12px"}};var H=function(e){var t=e.openNav,n=e.handleOpenNav;return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{openNav:t,handleOpenNav:n}),Object(g.jsxs)("div",{style:q.containerMainPage,children:[Object(g.jsx)("div",{style:q.containerImgMainPage,children:Object(g.jsx)("img",{src:V,style:q.imgMainPage,alt:"imagen",width:"500px"})}),Object(g.jsxs)("div",{style:q.containerPersonalInfo,children:[Object(g.jsx)("div",{style:q.info1,children:"Prueba T\xe9cnica"}),Object(g.jsx)("div",{style:q.info2,children:"Alex Daniel Meza L\xf3pez"}),Object(g.jsx)("div",{style:q.info1,children:"alexdanielmeza@gmail.com"})]})]})]})},J={container_app:{backgroundColor:"#fafafa",width:"100%",height:"100vh"}};var Q=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return Object(g.jsx)("div",{style:J.container_app,onClick:function(e){n&&parseInt(e.clientX,10)>=250&&a(!1)},children:Object(g.jsx)(c.a,{children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:O,render:function(){return Object(g.jsx)(I,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{path:y,render:function(){return Object(g.jsx)(w,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{path:m,render:function(){return Object(g.jsx)(R,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{path:f,render:function(){return Object(g.jsx)(F,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{path:h,render:function(){return Object(g.jsx)(L,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{path:j,render:function(){return Object(g.jsx)(M,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{path:b,render:function(){return Object(g.jsx)(P,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{path:x,render:function(){return Object(g.jsx)(H,{openNav:n,handleOpenNav:r})}}),Object(g.jsx)(l.b,{exact:!0,path:"/",children:Object(g.jsx)(l.a,{to:x})})]})})})};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.16659891.chunk.js.map