(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{408:function(s,a,n){"use strict";n.r(a);var e=n(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("h5",{attrs:{id:"变量声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[s._v("#")]),s._v(" 变量声明")]),s._v(" "),a("p",[s._v("变量在使用之前，必须先定义，如果没定义，会出现引用错误；\n定义方法：使用var 的关键字进行定义，后面必须加一个空格，空格后面为变量名"),a("br"),s._v("\n变量命名规则：\n1、变量名由字母、数字、下划线、$符号组成，不能以数字开头；\n2、大小写敏感；\n3、不能是关键字或者保留字；\n变量命名规范：\n1、变量的命名具有实际意义；\n2、遵守驼峰命名法，驼峰命名法：第一个单词首字母小写，后面单词的首字母大写，如userName")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var a；\n    var name;\n    var o_0;\n    var userName;\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"变量赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量赋值"}},[s._v("#")]),s._v(" 变量赋值")]),s._v(" "),a("p",[s._v("变量定义后，内部有一个默认储存的值叫undefined(未定义)\n表示内部变量内部未赋值，可以储存数据了；\n方式： 通过等号 = 赋值， 等号右边的值赋给左边的变量；\n书写习惯：等号两旁加空格")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var userName;\n    userName = 1;\n    console.log(userName);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("变量赋值时：内部可以存储任意类型的数据，甚至是一个变量；复制过程中，等号右侧的变量使用的是存储的数据；\n"),a("font",{attrs:{color:"red"}},[s._v("注意：\n变量参与赋值过程时，等号左变右不变；等号左侧会被赋值，将来值发生变化，等号右侧的变量使用内部的值参与运算，自身不会发生变化")])],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var a;\n    a = 1;\n    var b;\n    b = 2;\n    a = b + 1;\n    console.log(a);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("变量赋初值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var a = 2;\n    console.log(a);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("变量可多次赋值；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var a = 1;\n    a = 2;\n    a = 3;\n    console.log(a);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("变量快速多个赋值：\n多个变量用“，”隔开")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var a = 1,\n    b = 2,\n    c = 3;\n    console.log(a,b,c,a+b+c)\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);