/*! For license information please see 5595.daa6d3de.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5595],{84885:(e,r,t)=>{t.d(r,{A:()=>h});var o=t(7552),i=t(93878),n=t(43583),a=t(70799),l=t(1045);var s=t(51148),d=t(84893),c=t(58520),u=t(4785),g=t(15622),p=t(47839),m=t(69500);const S=(0,s.Ay)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,r)=>r.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),C=(0,s.Ay)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.badge,r[t.variant],r[`anchorOrigin${(0,g.A)(t.anchorOrigin.vertical)}${(0,g.A)(t.anchorOrigin.horizontal)}${(0,g.A)(t.overlap)}`],"default"!==t.color&&r[`color${(0,g.A)(t.color)}`],t.invisible&&r.invisible]}})((0,d.A)((({theme:e})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen}),variants:[...Object.entries(e.palette).filter((0,c.A)(["contrastText"])).map((([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main,color:(e.vars||e).palette[r].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:e})=>"top"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:e})=>"bottom"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:e})=>"top"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:e})=>"bottom"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:e})=>"top"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"circular"===e.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:e})=>"bottom"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"circular"===e.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:e})=>"top"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"circular"===e.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:e})=>"bottom"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"circular"===e.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}]}))));function G(e){return{vertical:e?.vertical??"top",horizontal:e?.horizontal??"right"}}const h=o.forwardRef((function(e,r){const t=(0,u.b)({props:e,name:"MuiBadge"}),{anchorOrigin:o,className:s,classes:d,component:c,components:h={},componentsProps:v={},children:f,overlap:b="rectangular",color:R="default",invisible:A=!1,max:O=99,badgeContent:I,slots:E,slotProps:w,showZero:D=!1,variant:T="standard",...y}=t,{badgeContent:F,invisible:x,max:M,displayValue:_}=function(e){const{badgeContent:r,invisible:t=!1,max:o=99,showZero:i=!1}=e,a=(0,n.A)({badgeContent:r,max:o});let l=t;!1!==t||0!==r||i||(l=!0);const{badgeContent:s,max:d=o}=l?a:e;return{badgeContent:s,invisible:l,max:d,displayValue:s&&Number(s)>d?`${d}+`:s}}({max:O,invisible:A,badgeContent:I,showZero:D}),L=(0,n.A)({anchorOrigin:G(o),color:R,overlap:b,variant:T,badgeContent:I}),k=x||null==F&&"dot"!==T,{color:P=R,overlap:N=b,anchorOrigin:H,variant:z=T}=k?L:t,B=G(H),$="dot"!==z?_:void 0,V={...t,badgeContent:F,invisible:k,max:M,displayValue:$,showZero:D,anchorOrigin:B,color:P,overlap:N,variant:z},j=(e=>{const{color:r,anchorOrigin:t,invisible:o,overlap:i,variant:n,classes:l={}}=e,s={root:["root"],badge:["badge",n,o&&"invisible",`anchorOrigin${(0,g.A)(t.vertical)}${(0,g.A)(t.horizontal)}`,`anchorOrigin${(0,g.A)(t.vertical)}${(0,g.A)(t.horizontal)}${(0,g.A)(i)}`,`overlap${(0,g.A)(i)}`,"default"!==r&&`color${(0,g.A)(r)}`]};return(0,a.A)(s,p.w,l)})(V),U=E?.root??h.Root??S,X=E?.badge??h.Badge??C,Z=w?.root??v.root,W=w?.badge??v.badge,Y=(0,l.A)({elementType:U,externalSlotProps:Z,externalForwardedProps:y,additionalProps:{ref:r,as:c},ownerState:V,className:(0,i.A)(Z?.className,j.root,s)}),Q=(0,l.A)({elementType:X,externalSlotProps:W,ownerState:V,className:(0,i.A)(j.badge,W?.className)});return(0,m.jsxs)(U,{...Y,children:[f,(0,m.jsx)(X,{...Q,children:$})]})}))},47839:(e,r,t)=>{t.d(r,{A:()=>a,w:()=>n});var o=t(33761),i=t(85693);function n(e){return(0,i.Ay)("MuiBadge",e)}const a=(0,o.A)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},59705:(e,r,t)=>{t.d(r,{A:()=>b});var o=t(7552),i=t(93878),n=t(70799),a=t(64761),l=t(51148),s=t(84893),d=t(4785),c=t(15622),u=t(58520),g=t(72489),p=t(69500);const m=a.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,S=a.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,C="string"!=typeof m?a.AH`
        animation: ${m} 1.4s linear infinite;
      `:null,G="string"!=typeof S?a.AH`
        animation: ${S} 1.4s ease-in-out infinite;
      `:null,h=(0,l.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.A)(t.color)}`]]}})((0,s.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:C||{animation:`${m} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,u.A)()).map((([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})))]})))),v=(0,l.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),f=(0,l.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,s.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:G||{animation:`${S} 1.4s ease-in-out infinite`}}]})))),b=o.forwardRef((function(e,r){const t=(0,d.b)({props:e,name:"MuiCircularProgress"}),{className:o,color:a="primary",disableShrink:l=!1,size:s=40,style:u,thickness:m=3.6,value:S=0,variant:C="indeterminate",...G}=t,b={...t,color:a,disableShrink:l,size:s,thickness:m,value:S,variant:C},R=(e=>{const{classes:r,variant:t,color:o,disableShrink:i}=e,a={root:["root",t,`color${(0,c.A)(o)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(t)}`,i&&"circleDisableShrink"]};return(0,n.A)(a,g.b,r)})(b),A={},O={},I={};if("determinate"===C){const e=2*Math.PI*((44-m)/2);A.strokeDasharray=e.toFixed(3),I["aria-valuenow"]=Math.round(S),A.strokeDashoffset=`${((100-S)/100*e).toFixed(3)}px`,O.transform="rotate(-90deg)"}return(0,p.jsx)(h,{className:(0,i.A)(R.root,o),style:{width:s,height:s,...O,...u},ownerState:b,ref:r,role:"progressbar",...I,...G,children:(0,p.jsx)(v,{className:R.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,p.jsx)(f,{className:R.circle,style:A,ownerState:b,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})})}))},72489:(e,r,t)=>{t.d(r,{A:()=>a,b:()=>n});var o=t(33761),i=t(85693);function n(e){return(0,i.Ay)("MuiCircularProgress",e)}const a=(0,o.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},88215:(e,r,t)=>{t.d(r,{x:()=>c});var o=t(7552),i=t(29527),n=t(89887),a=t(99305),l=t(87995),s=t(69500);function d(e){return e.substring(2).toLowerCase()}function c(e){const{children:r,disableReactTree:t=!1,mouseEvent:c="onClick",onClickAway:u,touchEvent:g="onTouchEnd"}=e,p=o.useRef(!1),m=o.useRef(null),S=o.useRef(!1),C=o.useRef(!1);o.useEffect((()=>(setTimeout((()=>{S.current=!0}),0),()=>{S.current=!1})),[]);const G=(0,i.A)((0,l.A)(r),m),h=(0,n.A)((e=>{const r=C.current;C.current=!1;const o=(0,a.A)(m.current);if(!S.current||!m.current||"clientX"in e&&function(e,r){return r.documentElement.clientWidth<e.clientX||r.documentElement.clientHeight<e.clientY}(e,o))return;if(p.current)return void(p.current=!1);let i;i=e.composedPath?e.composedPath().includes(m.current):!o.documentElement.contains(e.target)||m.current.contains(e.target),i||!t&&r||u(e)})),v=e=>t=>{C.current=!0;const o=r.props[e];o&&o(t)},f={ref:G};return!1!==g&&(f[g]=v(g)),o.useEffect((()=>{if(!1!==g){const e=d(g),r=(0,a.A)(m.current),t=()=>{p.current=!0};return r.addEventListener(e,h),r.addEventListener("touchmove",t),()=>{r.removeEventListener(e,h),r.removeEventListener("touchmove",t)}}}),[h,g]),!1!==c&&(f[c]=v(c)),o.useEffect((()=>{if(!1!==c){const e=d(c),r=(0,a.A)(m.current);return r.addEventListener(e,h),()=>{r.removeEventListener(e,h)}}}),[h,c]),(0,s.jsx)(o.Fragment,{children:o.cloneElement(r,f)})}},17515:(e,r,t)=>{t.d(r,{A:()=>g});var o=t(7552),i=t(93878),n=t(70799),a=t(51148),l=t(84893),s=t(4785),d=t(89663),c=t(69500);const u=(0,a.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})((0,l.A)((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]})))),g=o.forwardRef((function(e,r){const t=(0,s.b)({props:e,name:"MuiToolbar"}),{className:o,component:a="div",disableGutters:l=!1,variant:g="regular",...p}=t,m={...t,component:a,disableGutters:l,variant:g},S=(e=>{const{classes:r,disableGutters:t,variant:o}=e,i={root:["root",!t&&"gutters",o]};return(0,n.A)(i,d.U,r)})(m);return(0,c.jsx)(u,{as:a,className:(0,i.A)(S.root,o),ref:r,ownerState:m,...p})}))},89663:(e,r,t)=>{t.d(r,{A:()=>a,U:()=>n});var o=t(33761),i=t(85693);function n(e){return(0,i.Ay)("MuiToolbar",e)}const a=(0,o.A)("MuiToolbar",["root","gutters","regular","dense"])},19387:(e,r,t)=>{t.r(r),t.d(r,{COMFORTABLE_DENSITY_FACTOR:()=>Ve.Y8,COMPACT_DENSITY_FACTOR:()=>Ve.tS,DATA_GRID_PROPS_DEFAULT_VALUES:()=>_e.E,DEFAULT_GRID_AUTOSIZE_OPTIONS:()=>$e.N,DEFAULT_GRID_COL_TYPE_KEY:()=>Mr.x,DataGrid:()=>a.z,EMPTY_PINNED_COLUMN_FIELDS:()=>Pe.u,EMPTY_RENDER_CONTEXT:()=>nr.$A,GRID_ACTIONS_COLUMN_TYPE:()=>br.D,GRID_ACTIONS_COL_DEF:()=>br.C,GRID_BOOLEAN_COL_DEF:()=>Rr.H,GRID_CHECKBOX_SELECTION_COL_DEF:()=>Ar.f,GRID_CHECKBOX_SELECTION_FIELD:()=>Ar.t,GRID_COLUMN_MENU_SLOTS:()=>B.ai,GRID_COLUMN_MENU_SLOT_PROPS:()=>B.ep,GRID_DATETIME_COL_DEF:()=>Or.mP,GRID_DATE_COL_DEF:()=>Or.Bj,GRID_DEFAULT_LOCALE_TEXT:()=>Me._,GRID_EXPERIMENTAL_ENABLED:()=>xe,GRID_NUMERIC_COL_DEF:()=>Ir.g,GRID_ROOT_GROUP_ID:()=>Je.OL,GRID_SINGLE_SELECT_COL_DEF:()=>Er.m,GRID_STRING_COL_DEF:()=>wr.C,GridActionsCell:()=>C.i,GridActionsCellItem:()=>I,GridAddIcon:()=>N.jt,GridApiContext:()=>Ae.k,GridArrowDownwardIcon:()=>N.xC,GridArrowUpwardIcon:()=>N.ay,GridBody:()=>l.S,GridBooleanCell:()=>u.n,GridCell:()=>c.LX,GridCellCheckboxForwardRef:()=>k.c,GridCellCheckboxRenderer:()=>k.r,GridCellEditStartReasons:()=>Gr.a,GridCellEditStopReasons:()=>Gr.Q,GridCellModes:()=>Sr.bs,GridCheckCircleIcon:()=>N.gC,GridCheckIcon:()=>N.qb,GridClearIcon:()=>N.hR,GridCloseIcon:()=>N.yd,GridColumnHeaderFilterIconButton:()=>_.f,GridColumnHeaderItem:()=>F.d,GridColumnHeaderMenu:()=>H.H,GridColumnHeaderSeparator:()=>x.V,GridColumnHeaderSeparatorSides:()=>x.j,GridColumnHeaderSortIcon:()=>M.J,GridColumnHeaderTitle:()=>L._,GridColumnHeaders:()=>_r.f,GridColumnIcon:()=>N.Gf,GridColumnMenu:()=>B.aU,GridColumnMenuColumnsItem:()=>$.O,GridColumnMenuContainer:()=>z.T,GridColumnMenuFilterItem:()=>j.r,GridColumnMenuHideItem:()=>U.l,GridColumnMenuManageItem:()=>V.s,GridColumnMenuSortItem:()=>X.H,GridColumnsManagement:()=>Se.D,GridColumnsPanel:()=>W.G,GridContextProvider:()=>fr.X,GridCsvExportMenuItem:()=>ve.jX,GridDeleteForeverIcon:()=>N.aC,GridDeleteIcon:()=>N.jy,GridDragIcon:()=>N.Cf,GridEditBooleanCell:()=>g.X,GridEditDateCell:()=>p.Z,GridEditInputCell:()=>m.B,GridEditModes:()=>Sr.RL,GridEditSingleSelectCell:()=>S.D,GridExpandMoreIcon:()=>N.T5,GridFilterAltIcon:()=>N.lj,GridFilterForm:()=>le.R,GridFilterInputBoolean:()=>ue.h,GridFilterInputDate:()=>de.L,GridFilterInputMultipleSingleSelect:()=>me.B,GridFilterInputMultipleValue:()=>pe.M,GridFilterInputSingleSelect:()=>ce.t,GridFilterInputValue:()=>se.y,GridFilterListIcon:()=>N.Ui,GridFilterPanel:()=>ge.v,GridFooter:()=>Oe.C,GridFooterContainer:()=>D.J,GridFooterPlaceholder:()=>s.r,GridGenericColumnMenu:()=>B.HO,GridHeader:()=>Ie.k,GridHeaderCheckbox:()=>P.J,GridKeyboardArrowRight:()=>N.fX,GridLoadIcon:()=>N.e2,GridLoadingOverlay:()=>Ee.b,GridLogicOperator:()=>Cr.V,GridMenu:()=>Z.U,GridMenuIcon:()=>N.$2,GridMoreVertIcon:()=>N.c8,GridNoRowsOverlay:()=>we.h,GridOverlay:()=>T.$,GridOverlays:()=>d.I,GridPagination:()=>De.h,GridPanel:()=>Y.F,GridPanelContent:()=>Q.o,GridPanelFooter:()=>K.g,GridPanelHeader:()=>ne,GridPanelWrapper:()=>ae.G,GridPinnedColumnPosition:()=>Pe.K,GridPreferencePanelsValue:()=>Qe.y,GridPrintExportMenuItem:()=>ve.ME,GridRemoveIcon:()=>N.yk,GridRoot:()=>w.h,GridRow:()=>ye.T,GridRowCount:()=>Te.g,GridRowEditStartReasons:()=>hr.a,GridRowEditStopReasons:()=>hr.q,GridRowModes:()=>Sr.V_,GridSaveAltIcon:()=>N.U_,GridSearchIcon:()=>N.Kw,GridSelectedRowCount:()=>Fe.p,GridSeparatorIcon:()=>N.r$,GridSignature:()=>lr.HV,GridSkeletonCell:()=>E.k,GridTableRowsIcon:()=>N.Bn,GridToolbar:()=>Ce.O,GridToolbarColumnsButton:()=>Ge.j,GridToolbarContainer:()=>y.b,GridToolbarDensitySelector:()=>he.z,GridToolbarExport:()=>ve.qn,GridToolbarExportContainer:()=>be.Z,GridToolbarFilterButton:()=>fe.Q,GridToolbarQuickFilter:()=>Re.b,GridTripleDotsVerticalIcon:()=>N.A_,GridViewColumnIcon:()=>N.jS,GridViewHeadlineIcon:()=>N.dc,GridViewStreamIcon:()=>N.v$,GridVisibilityOffIcon:()=>N.j8,checkGridRowIdIsValid:()=>Je.Gh,createUseGridApiEventHandler:()=>lr.s9,getDataGridUtilityClass:()=>re.B,getDefaultGridFilterModel:()=>Ue.T,getGridBooleanOperators:()=>Dr.y,getGridDateOperators:()=>Tr.Q,getGridDefaultColumnTypes:()=>Mr.Z,getGridNumericOperators:()=>yr.J,getGridNumericQuickFilterFn:()=>yr.h,getGridSingleSelectOperators:()=>Fr.m,getGridStringOperators:()=>xr.n,getGridStringQuickFilterFn:()=>xr.X,gridClasses:()=>re.x,gridColumnDefinitionsSelector:()=>ke.OV,gridColumnFieldsSelector:()=>ke.JR,gridColumnGroupingSelector:()=>Ne.tf,gridColumnGroupsHeaderMaxDepthSelector:()=>Ne.aC,gridColumnGroupsHeaderStructureSelector:()=>Ne.GD,gridColumnGroupsLookupSelector:()=>Ne.ED,gridColumnGroupsUnwrappedModelSelector:()=>Ne.TQ,gridColumnLookupSelector:()=>ke.gv,gridColumnMenuSelector:()=>Le.$,gridColumnPositionsSelector:()=>ke.Sw,gridColumnResizeSelector:()=>ze,gridColumnVisibilityModelSelector:()=>ke.FY,gridColumnsStateSelector:()=>ke.em,gridColumnsTotalWidthSelector:()=>ke.fc,gridDataRowIdsSelector:()=>qe.A6,gridDateComparator:()=>tr.VE,gridDateFormatter:()=>Or.zT,gridDateTimeFormatter:()=>Or.SZ,gridDensityFactorSelector:()=>Ve.rf,gridDensitySelector:()=>Ve._v,gridDimensionsSelector:()=>or.z,gridEditRowsStateSelector:()=>je.w,gridExpandedRowCountSelector:()=>Xe.O7,gridExpandedSortedRowEntriesSelector:()=>Xe.em,gridExpandedSortedRowIdsSelector:()=>Xe.ux,gridFilterActiveItemsLookupSelector:()=>Xe.od,gridFilterActiveItemsSelector:()=>Xe.Ai,gridFilterModelSelector:()=>Xe.ZI,gridFilterableColumnDefinitionsSelector:()=>ke.Oe,gridFilterableColumnLookupSelector:()=>ke.U8,gridFilteredDescendantCountLookupSelector:()=>Xe.ZP,gridFilteredDescendantRowCountSelector:()=>Xe.r4,gridFilteredRowCountSelector:()=>Xe.ee,gridFilteredRowsLookupSelector:()=>Xe.wx,gridFilteredSortedRowEntriesSelector:()=>Xe.oU,gridFilteredSortedRowIdsSelector:()=>Xe.qA,gridFilteredSortedTopLevelRowEntriesSelector:()=>Xe.tW,gridFilteredTopLevelRowCountSelector:()=>Xe.RN,gridFocusCellSelector:()=>Ze.MO,gridFocusColumnGroupHeaderSelector:()=>Ze.WO,gridFocusColumnHeaderFilterSelector:()=>Ze.XY,gridFocusColumnHeaderSelector:()=>Ze.rj,gridFocusStateSelector:()=>Ze.he,gridHasColSpanSelector:()=>ke.kw,gridHeaderFilteringEditFieldSelector:()=>ir.B$,gridHeaderFilteringEnabledSelector:()=>ir.yt,gridHeaderFilteringMenuSelector:()=>ir.K8,gridHeaderFilteringStateSelector:()=>ir.ON,gridNumberComparator:()=>tr.Ou,gridPageCountSelector:()=>We.O,gridPageSelector:()=>We.$i,gridPageSizeSelector:()=>We.ij,gridPaginatedVisibleSortedGridRowEntriesSelector:()=>We.Q8,gridPaginatedVisibleSortedGridRowIdsSelector:()=>We.ee,gridPaginationMetaSelector:()=>We.py,gridPaginationModelSelector:()=>We.lN,gridPaginationRowCountSelector:()=>We.H2,gridPaginationRowRangeSelector:()=>We.vd,gridPaginationSelector:()=>We.M5,gridPanelClasses:()=>Y.x,gridPinnedColumnsSelector:()=>ke.He,gridPreferencePanelStateSelector:()=>Ye._,gridQuickFilterValuesSelector:()=>Xe.q6,gridRenderContextColumnsSelector:()=>ar.EG,gridRenderContextSelector:()=>ar.nZ,gridResizingColumnFieldSelector:()=>Be,gridRowCountSelector:()=>qe.H0,gridRowGroupingNameSelector:()=>qe.Y1,gridRowMaximumTreeDepthSelector:()=>qe.V2,gridRowSelectionStateSelector:()=>er.Bi,gridRowTreeDepthsSelector:()=>qe.Mz,gridRowTreeSelector:()=>qe.qj,gridRowsDataRowIdToIdLookupSelector:()=>qe.gk,gridRowsLoadingSelector:()=>qe.Dl,gridRowsLookupSelector:()=>qe.rI,gridRowsMetaSelector:()=>Ke.E,gridSortColumnLookupSelector:()=>rr.oF,gridSortModelSelector:()=>rr.XU,gridSortedRowEntriesSelector:()=>rr.J6,gridSortedRowIdsSelector:()=>rr.RJ,gridStringOrNumberComparator:()=>tr.Az,gridTabIndexCellSelector:()=>Ze.H5,gridTabIndexColumnGroupHeaderSelector:()=>Ze.dS,gridTabIndexColumnHeaderFilterSelector:()=>Ze.IL,gridTabIndexColumnHeaderSelector:()=>Ze.Kr,gridTabIndexStateSelector:()=>Ze.Uh,gridTopLevelRowCountSelector:()=>qe.O8,gridVirtualizationColumnEnabledSelector:()=>ar.m5,gridVirtualizationEnabledSelector:()=>ar._U,gridVirtualizationRowEnabledSelector:()=>ar.Al,gridVirtualizationSelector:()=>ar.dU,gridVisibleColumnDefinitionsSelector:()=>ke.iv,gridVisibleColumnFieldsSelector:()=>ke.TI,gridVisiblePinnedColumnDefinitionsSelector:()=>ke.Q1,gridVisibleRowsLookupSelector:()=>Xe.lL,isAutogeneratedRow:()=>Je.VO,isLeaf:()=>vr.x,renderActionsCell:()=>C.o,renderBooleanCell:()=>u.b,renderEditBooleanCell:()=>g.b,renderEditDateCell:()=>p.z,renderEditInputCell:()=>m.j,renderEditSingleSelectCell:()=>S.j,selectedGridRowsCountSelector:()=>er.vF,selectedGridRowsSelector:()=>er.gt,selectedIdsLookupSelector:()=>er.Zk,unstable_resetCleanupTracking:()=>lr._7,useFirstRender:()=>gr.g,useGridApiContext:()=>o.h,useGridApiEventHandler:()=>lr.cz,useGridApiMethod:()=>sr.P,useGridApiOptionHandler:()=>lr.re,useGridApiRef:()=>i.b,useGridLogger:()=>dr.q,useGridNativeEventListener:()=>ur.h,useGridRootProps:()=>n.A,useGridSelector:()=>cr.Nc,useGridVirtualization:()=>nr.lA,useOnMount:()=>pr.A,useRunOnce:()=>mr.A,virtualizationStateInitializer:()=>nr.nu});var o=t(76404),i=t(3274),n=t(64565),a=t(75459),l=t(71173),s=t(98114),d=t(80677),c=t(33360),u=t(2735),g=t(24411),p=t(26067),m=t(3619),S=t(57715),C=t(61828),G=t(6614),h=t(83673),v=t(7552),f=t(29629),b=t(66765),R=t(69500);const A=["label","icon","showInMenu","onClick"],O=["label","icon","showInMenu","onClick","closeMenuOnClick","closeMenu"],I=v.forwardRef(((e,r)=>{const t=(0,n.A)();if(!e.showInMenu){const{label:o,icon:i,onClick:n}=e,a=(0,h.A)(e,A),l=e=>{n?.(e)};return(0,R.jsx)(t.slots.baseIconButton,(0,G.A)({ref:r,size:"small",role:"menuitem","aria-label":o},a,{onClick:l},t.slotProps?.baseIconButton,{children:v.cloneElement(i,{fontSize:"small"})}))}const{label:o,icon:i,onClick:a,closeMenuOnClick:l=!0,closeMenu:s}=e,d=(0,h.A)(e,O);return(0,R.jsxs)(f.A,(0,G.A)({ref:r},d,{onClick:e=>{a?.(e),l&&s?.()},children:[i&&(0,R.jsx)(b.A,{children:i}),o]}))}));var E=t(10736),w=t(48335),D=t(91681),T=t(1895),y=t(61977),F=t(86775),x=t(38975),M=t(30943),_=t(92765),L=t(87038),k=t(17279),P=t(83861),N=t(80170),H=t(42386),z=t(2956),B=t(66456),$=t(32745),V=t(61361),j=t(32780),U=t(49158),X=t(23942),Z=t(83749),W=t(16028),Y=t(63869),Q=t(53936),K=t(95126),q=t(93878),J=t(48467),ee=t(70799),re=t(76959);const te=["className"],oe=e=>{const{classes:r}=e;return(0,ee.A)({root:["panelHeader"]},re.B,r)},ie=(0,J.A)("div",{name:"MuiDataGrid",slot:"PanelHeader",overridesResolver:(e,r)=>r.panelHeader})((({theme:e})=>({padding:e.spacing(1)})));function ne(e){const{className:r}=e,t=(0,h.A)(e,te),o=(0,n.A)(),i=oe(o);return(0,R.jsx)(ie,(0,G.A)({className:(0,q.A)(i.root,r),ownerState:o},t))}var ae=t(98118),le=t(55766),se=t(31525),de=t(22762),ce=t(24634),ue=t(19868),ge=t(51820),pe=t(33745),me=t(57134),Se=t(36014),Ce=t(76157),Ge=t(85262),he=t(44784),ve=t(38175),fe=t(19271),be=t(75492),Re=t(26524),Ae=t(92019),Oe=t(55507),Ie=t(1074),Ee=t(29463),we=t(77484),De=t(56384),Te=t(22987),ye=t(34299),Fe=t(43434);const xe=!1;var Me=t(52101),_e=t(53902),Le=t(83182),ke=t(80163),Pe=t(36155),Ne=t(8751),He=t(33642);const ze=e=>e.columnResize,Be=(0,He.Mz)(ze,(e=>e.resizingColumnField));var $e=t(32125),Ve=t(33658),je=t(62185),Ue=t(15060),Xe=t(2220),Ze=t(3247),We=t(24940),Ye=t(38577),Qe=t(48534),Ke=t(69639),qe=t(4394),Je=t(59458),er=t(82188),rr=t(43026),tr=t(14298),or=t(29641),ir=t(10365),nr=t(55730),ar=t(35281),lr=t(89148),sr=t(99270),dr=t(65111),cr=t(12274),ur=t(47434),gr=t(20849),pr=t(8161),mr=t(61959),Sr=t(87795),Cr=t(93527),Gr=t(88729),hr=t(89037),vr=t(20581),fr=t(61311),br=t(65325),Rr=t(97830),Ar=t(92179),Or=t(54310),Ir=t(21605),Er=t(10830),wr=t(59747),Dr=t(52446),Tr=t(30430),yr=t(81647),Fr=t(60150),xr=t(21721),Mr=t(23987),_r=t(79162)}}]);
//# sourceMappingURL=5595.daa6d3de.chunk.js.map