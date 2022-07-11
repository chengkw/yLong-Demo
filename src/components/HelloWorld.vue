<style lang='scss' scope>
*{
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.helloworld{
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  .carousel{
    width: 100%;
    height: 380px;
    position: relative;
    ul:nth-child(1){
      width: 100%;
      li{
        width: 100%;
        height: 380px;
        position: absolute;
        opacity: 0;
        transition:all 2s;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .Opacity{
          opacity: 1;
        }
    }
    ul:nth-child(2){
      display: flex;
      position: absolute;
      top: 360px;
      right: 80px;
      /*background: red;*/
      li{
        flex:1;
        background: #555;
        padding: 2.5px 13px;
        margin: 0 5px;
      }
      .backGround{
        background: #f60;
      }
    }
    .carousel_type{
      width: 600px;
      height: 300px;
      background: #fff;
      position: absolute;
      top: 40px;
      left: 60px;
     /* z-index: 0;*/
      display: flex;
      ol{
        flex:1;
        height: 100%;
        /*background: red;*/
        li{
          width: 100%;
          height: 59px;
          background: #f3f3f3;
          line-height: 59px;
          text-align: center;
          border-right: 1px solid #e1e1e1;
          color: #555;
          font-size: 14px;
          cursor:pointer;
        }
        li+li{
          border-top: 1px solid #e1e1e1;
        }
        .type_li{
          background: #fff;
          border-right:1px solid #fff;
          color: #37D;
        }
      }
      .carousel_typeOne{
        flex:5;
        position: relative;
        .typeaa{
          position: absolute;
          top: 10px;
          display: none;
          z-index: 3;
          left: 20px;
        }
        .typeOne{
          width: 440px;
          height: 280px;
          display: block;
          /*background: red;*/
          padding-left: 20px;
          margin: 0 auto;
          div:nth-child(1){
            width: 100%;
            height: 32px;
            margin-top: 10px;
            line-height: 32px;
            border-bottom: 2px solid #aaa;
            span{
              color: #555;
              font-size: 14px;
              padding: 8px 15px;
              cursor: pointer;
            }
            span:hover{
              color: #37D;
            }
            .span_bg{
              color: #37D;
              border-bottom: 2px solid #37D;
            }
          }
          p{
            height: 30px;
            margin-top: 20px;
            span{
              display: inline-block;
              height: 30px;
              width: 60px;
              text-align: right;
              font-size: 14px;
              color: #555;
              padding-right: 5px;
            }
            input{
              border: 1px solid #ccc;
              height: 30px;
              border-radius: 3px;
              /*line-height: 30px;*/
            }
            button{
              height: 32px;
              cursor: pointer;
            }
            button:nth-child(1){
              padding: 5px 60px;
              font-size: 16px;
              background: #f55;
              border: 0;
              border-radius: 3px;
              color: #fff;
              margin-left: 65px;
            }
            button:nth-child(1):hover{
              background: #e55;
            }
            button:nth-child(2){
              padding: 5px 15px;
              border: 1px solid #ccc;
              color: #555;
              margin-left: 10px;
              border-radius: 3px;
              background: #fff;
            }
            button:nth-child(2):hover{
              background: #39f;
              color: #fff;
            }
          }
          p:nth-child(1){
            input{
              width: 354px;
              padding: 0 10px 0 6px;
            }
          }
          p:nth-child(2){
            input{
              width: 160px;
            }
            span{
              margin-left: -20px;
            }
            span:nth-child(1){
              margin-left: 0;
            }
          }
          p:nth-child(3){
            input{
              width: 354px;
              padding: 0 10px 0 6px;
            }
          }
        }
        .typeTwo{
          width: 440px;
          height: 280px;
          margin: 0 auto;
          div:nth-child(1){
            width: 100%;
            height: 32px;
            margin-top: 10px;
            line-height: 32px;
            border-bottom: 2px solid #aaa;
            span{
              color: #555;
              font-size: 14px;
              padding: 8px 15px;
              cursor: pointer;
            }
            span:hover{
              color: #37D;
            }
            .span_bgtwo{
              color: #37D;
              border-bottom: 2px solid #37D;
            }
          }
          p{
            height: 30px;
            margin-top: 20px;
            span{
              display: inline-block;
              height: 30px;
              width: 60px;
              text-align: right;
              font-size: 14px;
              color: #555;
              padding-right: 5px;
            }
            input{
              border: 1px solid #ccc;
              height: 30px;
              border-radius: 3px;
              /*line-height: 30px;*/
            }
            button{
              height: 32px;
              cursor: pointer;
            }
            button:nth-child(1){
              padding: 5px 60px;
              font-size: 16px;
              background: #f55;
              border: 0;
              border-radius: 3px;
              color: #fff;
              margin-left: 65px;
            }
            button:nth-child(1):hover{
              background: #e55;
            }
            button:nth-child(2){
              padding: 5px 15px;
              border: 1px solid #ccc;
              color: #555;
              margin-left: 10px;
              border-radius: 3px;
              background: #fff;
            }
            button:nth-child(2):hover{
              background: #39f;
              color: #fff;
            }
          }
          p:nth-child(1){
            color:#555;
            font-size:14px;
            input{
              vertical-align: middle;
            }
            input:nth-child(3){
              margin-left: 20px;
            }
          }
          p:nth-child(2){
            margin-top: 10px;
            font-size: 14px;
            color: #555;
            input{
              width: 153px;
            }
            input:nth-child(2){
              margin-right: 30px;
            }
            input:nth-child(3){
              margin-left: 5px;
            }
            span{
              margin-left: -20px;
            }
            span:nth-child(1){
              margin-left: 0;
            }
          }
          p:nth-child(3){
            input{
              width: 160px;
            }
            span{
              margin-left: -15px;
            }
            span:nth-child(1){
              margin-left: 0;
            }
          }
        }
        .typeThree{
          width: 440px;
          height: 280px;
          /*background: #ccc;*/
          margin: 0 auto;
          p{
            height: 30px;
            margin-top: 20px;
            font-size: 14px;
            span{
              display: inline-block;
              height: 30px;
              /*width: 60px;*/
              text-align: right;
              font-size: 14px;
              color: #555;
              padding-right: 5px;
            }
            input{
              border: 1px solid #ccc;
              height: 30px;
              border-radius: 3px;
              /*line-height: 30px;*/
            }
          }
          p:nth-child(1){
            margin-top: 30px;
            font-size: 14px;
            color: #555;
            input{
              width: 153px;
            }
            input:nth-child(2){
              margin-right: 30px;
            }
            input:nth-child(3){
              margin-left: 5px;
            }
            span{
              margin-left: -20px;
            }
            span:nth-child(1){
              margin-left: 0;
            }
          }
          p:nth-child(2){
            input:nth-child(3){
              width:12px;
              height: 12px;
              margin-left: 20px;
            }
          }
        }
        .typeFour{
          width: 440px;
          height: 280px;
          /*background: green;*/
          margin: 0 auto;
          div{
            margin-top: 13px;
          }
        }
      }
    }
  }
  .hbody_one{
    width: 100%;
    margin: 20px 0;
    line-height: 32px;
    div{
      width: 1200px;
      height: 32px;
      margin: 0 auto;
      /*background: red;*/
      font-size: 14px;
      color: #555;
      div{
        width: 175px;
        height: 30px;
        margin: 0;
        border: 1px solid #bbb;
        padding: 0 20px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        a{
          color: #36c;
          margin-left: 5px;
        }
        a:hover{
          color: red;
        }
        i{
          display: inline-block;
          width: 14px;
          height: 14px;
          background:url(../assets/icon_index.png) -583px -15px no-repeat;
          background-image: url(../assets/icon_index.png) -583px -13px no-repeat;
        }
      }
    } 
  }
  .accordion{
    width: 100%;
    ul{
      width: 1200px;
      height: 260px;
      background: #ccc;
      margin: 0 auto;
      overflow: hidden;
      li{
        width: calc(100%/7);
        height:100%;
        position: relative;
        float: left;
        transition:all 0.5s;
        img{
          /*width: 100%;*/
          height: 100%;
          margin-right: 100px;
          position: absolute;
        }
        h1{
          position: absolute;
          top: 60px;
          left: 70px;
          z-index: 2;
          width: 30px;
          font-size: 30px;
          color: #fff;
        }
        div{
          width: calc(1200px/7);
          height: 100%;
          background: rgba(0,0,0,0.3);
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          /*transition:all 0.5s;*/
        }
      }
      li:hover h1{
          display: none;
      }
      li:hover div{
          background: rgba(0,0,0,0);
        }
    }
  }
  .hbody_two{
    width: 100%;
    h2{
      width: 1200px;
      margin: 0 auto;
      border-bottom: 2px solid #f55;
      padding: 30px 0 10px 0;
      a{
        color: #f55;
      }
      span{
        font-size: 14px;
        font-weight: normal;
        color: #999;
        margin-left: 20px;
      }
    }
  }
  .details{
    width: 100%;
    h3{
      width: 1200px;
      padding: 10px 0;
      overflow: hidden;
      /*background: aqua;*/
      margin: 0 auto;
      a{
        color: #555;
        i{
          display: inline-block;
          width: 29px;
          height: 24px;
          background: url(../assets/icon_index.png) -575px -101px no-repeat;
        }
      }
      a:nth-child(1){
        margin-right: 30px;
      }
      span{
        font-size: 14px;
        color: #555;
        font-weight: normal;
        padding: 4px 9px;
        margin: 4px 10px 0;
        border-radius: 12px;
        cursor: pointer;
        border: 1px solid #fff;
      }
      span:hover{
        border: 1px solid #F66;
        color: #F66;
      }
      .background{
        background: #F66;
        color: #fff;
        border: 1px solid #F66;
      }
      .background:hover{
        color: #fff;
      }
    }
    .details_a{
      font-size: 14px;
      font-weight: normal;
      float: right;
      line-height: 39px;
    }
    div{
      width: 1210px;
      height: 202px;
      /*background: #ccc;*/
      margin: 0 auto;
      position: relative;
      ul{
        display: none;
        position: absolute;
        width: 100%;
        li{
          float: left;
          width: 293px;
          height: 202px;
          margin-right: 10px;
          position: relative;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            transition:all 0.5s;
          }
          h2{
            font-size: 24px;
            color: #fff;
            position: absolute;
            bottom: 45px;
            left: 10px;
          }
          p{
            width: 100%;
            height: 30px;
            line-height: 30px;
            background: red;
            padding: 5px;
            position: absolute;
            bottom: 0;
            font-size: 13px;
            color: #555;
            background: #f7f7f7;
            border-bottom: 1px solid #ccc;
          }
        }
        li:nth-child(4){
          margin-right: 0;
        }
        li:hover img{
          margin-top: -10px;
        }
        li:hover p{
          border-bottom: 1px solid #F66;
        }
      }
      .disy{
        display: block;
      }
    }
  }
  .details_two{
    width: 100%;
    margin-top: 20px;
    h3{
      width: 1200px;
      padding: 10px 0;
      overflow: hidden;
      /*background: aqua;*/
      margin: 0 auto;
      a{
        color: #555;
        i{
          display: inline-block;
          width: 29px;
          height: 24px;
          background: url(../assets/icon_index.png) -575px -130px no-repeat;
        }
      }
      a:nth-child(1){
        margin-right: 30px;
      }
      span{
        font-size: 14px;
        color: #555;
        font-weight: normal;
        padding: 4px 9px;
        margin: 4px 10px 0;
        border-radius: 12px;
        cursor: pointer;
        border: 1px solid #fff;
      }
      span:hover{
        border: 1px solid #F66;
        color: #F66;
      }
      .background_two{
        background: #F66;
        color: #fff;
        border: 1px solid #F66;
      }
      .background_two:hover{
        color: #fff;
      }
    }
    .details_aa{
      font-size: 14px;
      font-weight: normal;
      float: right;
      line-height: 39px;
    }
    div{
      width: 1210px;
      height: 202px;
      /*background: #ccc;*/
      margin: 0 auto;
      position: relative;
      ul{
        display: none;
        position: absolute;
        width: 100%;
        li{
          float: left;
          width: 293px;
          height: 202px;
          margin-right: 10px;
          position: relative;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            transition:all 0.5s;
          }
          h2{
            font-size: 24px;
            color: #fff;
            position: absolute;
            bottom: 45px;
            left: 10px;
          }
          p{
            width: 100%;
            height: 30px;
            line-height: 30px;
            background: red;
            padding: 5px;
            position: absolute;
            bottom: 0;
            font-size: 13px;
            color: #555;
            background: #f7f7f7;
            border-bottom: 1px solid #ccc;
          }
        }
        li:nth-child(4){
          margin-right: 0;
        }
        li:hover img{
          margin-top: -10px;
        }
        li:hover p{
          border-bottom: 1px solid #F66;
        }
      }
      .disy_two{
        display: block;
      }
    }
  }
  .detailsThree{
    width: 100%;
    margin-top: 20px;
    h1{
      width: 1200px;
      margin: 0 auto;
      border-bottom: 2px solid #49f;
      a{
        color: #49f;
        font-size: 24px;
      }
    }
  }
  .details_three{
    width: 100%;
    height: 168px;
    overflow: hidden;
    /*background: #ccc;*/
    padding-bottom: 10px;
    /*height: 500px;*/
    h3{
      width: 1200px;
      padding: 10px 0;
      overflow: hidden;
      line-height: 40px;
      /*background: aqua;*/
      margin: 0 auto;
      a{
        color: #555;
        i{
          display: inline-block;
          width: 29px;
          height: 24px;
          background: url(../assets/icon_index.png) -573px -188px no-repeat;
        }
      }
      a:nth-child(1){
        margin-right: 30px;
      }
      .details_c{
        float: right;
        font-size: 14px;
        font-weight: normal;
      }
      span{
        font-size: 14px;
        color: #555;
        font-weight: normal;
        padding: 4px 9px;
        margin: 4px 10px 0;
        border-radius: 12px;
        cursor: pointer;
        border: 1px solid #fff;
      }
      span:hover{
        border: 1px solid #49f;
        color: #49f;
      }
      .background_three{
        background: #49f;
        color: #fff;
        border: 1px solid #49f;
      }
      .background_three:hover{
        color: #fff;
      }
    }
    div{
      width: 1200px;
      height: 200px;
      margin: 0 auto;
      /*background: #ccc;*/
      position: relative;
      ul{
        width: 100%;
        height: 102px;
        /*background: aqua;*/
        position: absolute;
        display: none;
        li{
          width: 178px;
          height: 80px;
          float: left;
          padding: 10px;
          border: 1px solid #ccc;
          background: #f4f9ff;
          border-right: 1px solid #f4f9ff;
          p{
            /*background: red;*/
            font-size: 14px;
            color: #555;
            padding: 15px 5px 0 5px;
            i{
              display: inline-block;
              width: 30px;
              height: 20px;
              background: url(../assets/icon_index.png) -568px -168px no-repeat;
              margin-right: 15px;
              vertical-align: top;
            }
            span:nth-child(1){
              padding: 0 15px 0 20px;
            }
          }
          div{
            width: 100%;
            height: 20px;
            font-size: 12px;
            padding: 15px 0 5px 0;
            span:nth-child(1){
              color:#555;
              padding-left: 10px;
            }
            span:nth-child(2){
              display: inline-block;
              color: #fff;
              padding: 4px;
              background: green;
              margin: 0 10px;
              border-radius: 10px;
            }
            span:nth-child(3){
              color: #f60;
              font-size: 14px;
              margin-left: 5px;
            }
          }
        }
        li+li{
          border-left: 1px solid #ccc;
        }
        li:nth-child(6){
          border-right: 1px solid #ccc;
        }
        li:hover{
          border:1px solid #49f;
        }
      }
      .disy_three{
        display: block;
      }
    }
  }

  .details_four{
    width: 100%;
    height: 168px;
    overflow: hidden;
    h3{
      width: 1200px;
      padding: 10px 0;
      overflow: hidden;
      line-height: 40px;
      /*background: aqua;*/
      margin: 0 auto;
      a{
        color: #555;
        i{
          display: inline-block;
          width: 29px;
          height: 24px;
          background: url(../assets/icon_index.png) -573px -222px no-repeat;
        }
      }
      a:nth-child(1){
        margin-right: 30px;
      }
      .details_d{
        float: right;
        font-size: 14px;
        font-weight: normal;
      }
      span{
        font-size: 14px;
        color: #555;
        font-weight: normal;
        padding: 4px 9px;
        margin: 4px 10px 0;
        border-radius: 12px;
        border: 1px solid #fff;
        /*background: aqua;*/
        cursor: pointer;
      }
      span:hover{
        border: 1px solid #49f;
        color: #49f;
      }
      .background_four{
        background: #49f;
        color: #fff;
        border: 1px solid #49f;
      }
      .background_four:hover{
        color: #fff;
      }
    }

    div{
      width: 1200px;
      margin: 0 auto;
      position: relative;
      ul{
        width: 100%;
        height: 102px;
        position: absolute;
        display: none;
        li{
          width: 178px;
          height: 80px;
          float: left;
          padding: 10px;
          border: 1px solid #ccc;
          background: #f4f9ff;
          border-right: 1px solid #f4f9ff;
          p{
            /*background: red;*/
            font-size: 14px;
            color: #555;
            padding: 15px 5px 0 5px;
            i{
              display: inline-block;
              width: 30px;
              height: 20px;
              background: url(../assets/icon_index.png) -528px -168px no-repeat;
              margin-right: 15px;
              vertical-align: top;
            }
            span:nth-child(1){
              padding: 0 15px 0 20px;
            }
          }
          div{
            width: 100%;
            height: 20px;
            font-size: 12px;
            padding: 15px 0 5px 0;
            span:nth-child(1){
              color:#555;
              padding-left: 10px;
            }
            span:nth-child(2){
              color: #f60;
              font-size: 14px;
              margin-left: 60px;
            }
          }
        }
        li+li{
          border-left: 1px solid #ccc;
        }
        li:nth-child(6){
          border-right: 1px solid #ccc;
        }
        li:hover{
          border:1px solid #49f;
        }
      }
      .disy_four{
        display: block;
      }
    }
  }

  .detailsFour{
    width: 100%;
    margin-top: 20px;
    h1{
      width: 1200px;
      margin: 0 auto;
      border-bottom: 2px solid #77cc11;
      a{
        color: #77cc11;
        font-size: 24px;
      }
    }
  }
  .details_five{
    width: 1200px;
    height: 220px;
    margin: 0 auto;
    padding-top: 12px;
    .detailsDiv_one{
      float: left;
      /*overflow: hidden;*/
      ul{
        float: left;
        li{
          padding: 0 60px 0 10px;
          height: 54px;
          line-height: 54px;
          border-bottom: 1px solid #ccc;
        }
        .guide_li{
          background: #77cc11;
          color: #fff;
        }
        a{
          font-size: 14px;
          color: #555;
        }
      }
      ol{
        float: left;
        position: relative;
        li{
          position: absolute;
          display: none;
        }
        .guides_li{
          display: block;
        }
      }
    }
    .detailsDiv_two{
      /*overflow: hidden;*/
      float: right;
      display: flex;
      div{
        width: 280px;
        height: 220px;
        margin-left: 22px;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        /*background: red;*/
        img{
          height: 180px;
        }
        p{
          color: #37e;
          font-size: 14px;
          padding: 10px;
          background: #f7f7f7;
        }
        p:hover{
          color: #F55;
        }
      }
      div:hover{
        border-bottom: 2px solid #77cc11;
      }
    }
  }
  .details_six{
    width: 100%;
    margin-top: 20px;
    ul{
      width: 1160px;
      height: 60px;
      background: #f7f7f7;
      padding: 20px;
      margin: 0 auto;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      border-bottom: 1px solid #e5e5e5;
      li{
        float: left;
        width: 290px;
        height: 60px;
        i{
          float: left;
          display: inline-block;
          width: 60px;
          height: 60px;
          
        }
        @keyframes moves{
          0%{
            transform:rotateZ(0deg);
          }
          2%{
            transform:rotateZ(-15deg);
          }
          6%{
            transform:rotateZ(15deg);
          }
          10%{
            transform:rotateZ(-15deg);
          }
          14%{
            transform:rotateZ(15deg);
          }
          18%{
            transform:rotateZ(-15deg);
          }
          22%{
            transform:rotateZ(15deg);
          }
          24%{
            transform:rotateZ(0deg);
          }
          100%{
            transform:rotateZ(0deg);
          }
        }
        span{
          line-height: 60px;
          padding-left: 10px;
          color: #555;
          font-size: 16px;
        }
      }
      li:hover i{
        animation:moves 3s infinite linear;
      }
      li:nth-child(1){
        i{
          background:url(../assets/icon_index.png) -91px -4px no-repeat;
        }
      }
      li:nth-child(2){
        i{
          background: url(../assets/icon_index.png) -159px -4px no-repeat;
        }
      }
      li:nth-child(3){
        i{
          background: url(../assets/icon_index.png) -228px -4px no-repeat;
        }
      }
      li:nth-child(4){
        i{
          background: url(../assets/icon_index.png) -295px -6px no-repeat;
        }
      }
    }
    .detailssix_div{
      overflow: hidden;
      width: 1200px;
      height: 80px;
      margin: 0 auto;
      background: #f7f7f7;
     div:nth-child(1){
      float: left;
      width: 110px;
      height: 80px;
      background: url(../assets/icon_index.png) -385px -20px no-repeat;
      margin-left: -20px;
      transition:all 0.5s;
     }
     .detailsix_zhong{
      float: right;
      width: 540px;
      height: 80px;
      line-height: 80px;
      /*background: #ccc;*/
      margin-right: 300px;
      span{
        color: #71829d;
        font-size: 16px;
        padding-right: 5px;
      }
      input{
        width: 206px;
        height: 28px;
        border: 1px solid #ccc;
      }
      button{
        width: 80px;
        height: 30px;
        background: #3377dd;
        border: 0;
        color: #fff;
      }
     }
     a{
      float: right;
      color: #37e;
      font-size: 14px;
      line-height: 80px;
      margin-right: 10px;
     }
     a:hover{
      color: #f55;
     }
    }
    .detailssix_div:hover div:nth-child(1){
      margin-left: 0;
    }
  }
  .foot{
    margin-top: 20px;
  }
}
</style>
<template>
  <div class='helloworld'>
  <v-head></v-head>
  
  
  <div class='carousel'>
    <ul>
      <li v-for='(item,index) in itemimg' :class='{Opacity:number==index}'>
        <a href="#">
          <img :src="item.imgs" alt="我是图片" />
        </a>
      </li>
    </ul>
    <ul>
      <li v-for='(items,index) in itemList' :class='{backGround:number==index}' @click='change(index)'></li>
    </ul>

    <div class='carousel_type'>
      <ol>
        <li v-for='(itemtext,index) in textcut' @click='lunCut(index)' :class='{type_li:nb==index}'>{{itemtext}}</li>
      </ol>
      <div class='carousel_typeOne'>
        <div class='typeOne typeaa'>
          <div>
            <span v-for='(item,index) in span' @click='spanBg(index)' :class='{span_bg:spanNum==index}'>{{item}}</span>
          </div>
          <div>
            <p><span>目的地</span><input type="text" /></p>
            <p><span>入住</span><input type="date"/><span>离店</span><input type="date" /></p>
            <p><span>关键词</span><input type="text" placeholder='如位置\酒店名\品牌' class='one_value' /></p>
            <p><button>搜索</button><button class='one_map'>地图搜索</button></p>
          </div>
        </div>
        <div class='typeTwo typeaa'>
          <div>
            <span v-for='(item,index) in span_two' @click='spanBg_two(index)' :class='{span_bgtwo:spanNum_two==index}'>{{item}}</span>
          </div>
          <div>
            <p class='input_two'><span>航程类型</span><input type="radio" name='a' checked />单程<input type="radio" name='a' />往返</p>
            <p class='p_two'><span>往返城市</span><input type="text" placeholder='中文/拼音/首字母' />返回<input type="text" placeholder='中文/拼音/首字母' /></p>
            <p><span>去程</span><input type="date"/><span>返程</span><input type="date" /></p>
            <p><button>搜索</button></p>
          </div>
        </div>
        <div class='typeThree typeaa'> 
          <div>
            <p><span>往返城市</span><input type="text" placeholder='中文/拼音/首字母' />返回<input type="text" placeholder='中文/拼音/首字母' /></p>
            <p><span>出发时间</span><input type="date" /><input type="checkbox" /><span>只看动车/高铁</span></p>
          </div>
        </div>
        <div class='typeFour typeaa'>
          <div>
            <img src="../assets/mobile_bg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='hbody_one'>
    <div>
      <div><i></i><a href="">登录</a><span>展示你的个性内容</span></div>
    </div>
  </div>
  <div class='accordion'>
    <ul>
      <li v-for='(itemAcc,index) in accordionImg' @mouseover='mouseover(index)' @mouseout='mouseout(index)' ><a href=""><img :src="itemAcc.imgs" alt="" /><h1>{{itemAcc.accList}}</h1><div></div></a></li>
    </ul>
  </div>
  
  <div class='hbody_two'>
    <h2><a href="">目的地指数</a><span>覆盖全球75万家酒店，你想住的，我们都有</span></h2>
  </div>
  
  <div class='details'>
    <h3><a href=""><i></i>国内</a><span @click='cutDeta(index)' :class='{background:nums==index}' v-for='(itemdeta,index) in detailsSpan'>{{itemdeta.title}}</span><a href="" class='details_a'>更多>></a></h3>
    <div>
      <ul v-for='(itemUls,index) in detailsSpan' :class='{disy:num==index}'>
        <li v-for='(itemLis,index) in itemUls.date'>
          <a href='http://localhost:8080/#/head_two'><img :src="itemLis.img" alt="" /></a>
          <h2>{{itemLis.list}}</h2>
          <p>{{itemLis.text}}</p>
        </li>
      </ul>
    </div>
  </div>

  
  <div class='details_two'>
    <h3><a href=""><i></i>国内</a><span @click='cutDeta_two(index)' :class='{background_two:Nums==index}' v-for='(itemDate,index) in detailsSpan_two'>{{itemDate.title}}</span><a href="" class='details_aa'>更多>></a></h3>
    <div>
      <ul v-for='(itemQ,index) in detailsSpan_two' :class='{disy_two:Num==index}'>
        <li v-for='(itemW,index) in itemQ.date'>
          <a href=""><img :src="itemW.img" alt="" /></a>
          <h2>{{itemW.list}}</h2>
          <p>{{itemW.text}}</p>
        </li>
      </ul>
    </div>
  </div>

  <div class='detailsThree'>
    <h1><a href="">超值特价票</a></h1>
  </div>

  <div class='details_three'>
    <h3>
      <a href=""><i></i>机票</a>
      <span v-for='(itemFei,index) in detailsSpan_three' @click='cutDeta_three(index)' :class='{background_three:NUM==index}'>{{itemFei.title}}</span>
      <a href="" class='details_c'>更多>></a>
    </h3>
    <div>
      <ul v-for='(itemFe,index) in detailsSpan_three' :class='{disy_three:NUMS==index}'>
        <li v-for='(itemFe_li,index) in itemFe.date'>
          <p><span>{{itemFe_li.start}}</span><i></i><span>{{itemFe_li.destination}}</span></p>
          <div><span>{{itemFe_li.month}}</span><span>{{itemFe_li.discount}}折</span><span>{{itemFe_li.money}}</span></div>
        </li>
      </ul>
    </div>
  </div>


  <div class='details_four'>
    <h3 class='details_h3'>
      <a href=""><i></i>火车票</a>
      <span v-for='(itemHUO,index) in detailsSpan_four' @click='cutDeta_four(index)' :class='{background_four:NUMtwo==index}'>{{itemHUO.title}}</span>
      <a href="" class='details_d'>更多>></a>
    </h3>
    <div>
      <ul v-for='(itemHuo,index) in detailsSpan_four' :class='{disy_four:NUMStwo==index}'>
        <li v-for='(itemH_li,index) in itemHuo.date'>
          <p><span>{{itemH_li.start}}</span><i></i><span>{{itemH_li.destination}}</span></p>
          <div><span>{{itemH_li.month}}</span><span>{{itemH_li.money}}</span></div>
        </li>
      </ul>
    </div>
  </div>

  <div class='detailsFour'>
    <h1><a href="">旅游指南</a></h1>
  </div>
  <div class='details_five'>
    <div class='detailsDiv_one'>
      <ul>
        <a href=""><li v-for='(item_five,index) in guide' @mouseover='guideLi(index)' :class='{guide_li:names==index}'>{{item_five}}</li></a>
      </ul>
      <ol>
        <li v-for='(item_fives,index) in guides' :class='{guides_li:name==index}'><a href=""><img :src="item_fives" alt="" /></a></li>
      </ol>
    </div>
    
    <div class='detailsDiv_two'>
      <div>
        <a href="">
          <img src="../assets/17080254.jpg" alt="" />
          <p>探秘海岛，赵薇在象岛开的中餐厅</p>
        </a>
      </div>
      <div>
        <a href="">
          <img src="../assets/17030505.jpg" alt="" />
          <p>毛里求斯 海誓山盟</p>
        </a>
      </div>
    </div>
  </div>

  <div class='details_six'>
    <ul>
      <li><i></i><span>全球75万家酒店</span></li>
      <li><i></i><span>订酒店返现金高达20%</span></li>
      <li><i></i><span>国际酒店8折起</span></li>
      <li><i></i><span>7×24小时服务</span></li>
    </ul>
    <div class='detailssix_div'>
      <div></div><a href="">艺龙服务协议</a>
      <div class='detailsix_zhong'>
        <span>亲，留下您的邮箱，会有惊喜呦~</span><input type="text" placeholder='请输入您的E-mail' id='e-mail' /><button>立即订阅</button>
      </div>
    </div>
  </div>
    <v-foot class='foot'></v-foot>
    <v-footer class='footer'></v-footer>
  
  <div>
    <router-view></router-view>
  </div>
  </div>

</template>

<script>
import img1 from '../assets/carousel1.jpg';
import img2 from '../assets/carousel2.jpg';
import img3 from '../assets/carousel3.jpg';
import img4 from '../assets/carousel4.jpg';
import img5 from '../assets/carousel5.jpg';
import imga from '../assets/20150422_ifold1.jpg';
import imgb from '../assets/20150120_ifold2.jpg';
import imgc from '../assets/20150120_ifold3.jpg';
import imgd from '../assets/20150120_ifold4.jpg';
import imge from '../assets/20150120_ifold5.jpg';
import imgf from '../assets/20150120_ifold6.jpg';
import imgg from '../assets/20150120_ifold7.jpg';

import lia from '../assets/dgtq-hs.jpg';
import lib from '../assets/dgtq-ems.jpg';
import lic from '../assets/dgtq-wts.jpg';
import lid from '../assets/dgtq-ls.jpg';
import liaa from '../assets/hbtl-tianmuhu.jpg';
import libb from '../assets/hbtl-tianmuweihai.jpg';
import licc from '../assets/hbtl-zhongshan.jpg';
import lidd from '../assets/hbtl-anbo.jpg';
import liA from '../assets/hbtl-lasa.jpg';
import liB from '../assets/hbtl-dali.jpg';
import liC from '../assets/hbtl-zhoushan.jpg';
import liD from '../assets/hbtl-xiamen.jpg';
import liAA from '../assets/cysh-xlgl.jpg';
import liBB from '../assets/cysh-bs.jpg';
import liCC from '../assets/cysh-reg.jpg';
import liDD from '../assets/cysh-qls.jpg';
import liaaa from '../assets/termini_t3_xt.jpg';
import libbb from '../assets/termini_t3_hs.jpg';
import liccc from '../assets/termini_t3_wz.jpg';
import liddd from '../assets/termini_t3_py.jpg';
import liAAA from '../assets/termini_t4_xg.jpg';
import liBBB from '../assets/termini_t4_cd.jpg';
import liCCC from '../assets/termini_t4_yz.jpg';
import liDDD from '../assets/termini_t4_cs.jpg';

import liq from '../assets/termini_it1_ld.jpg';
import liw from '../assets/termini_it1_qm.jpg';
import lie from '../assets/termini_it1_jzd.jpg';
import lir from '../assets/termini_it1_lm.jpg';
import liqq from '../assets/termini_it2_pjd.jpg';
import liww from '../assets/termini_it2_medf.jpg';
import liee from '../assets/termini_it2_sb.jpg';
import lirr from '../assets/termini_it2_xwy.jpg';
import liqqq from '../assets/termini_it3_bsln.jpg';
import liwww from '../assets/termini_it3_ml.jpg';
import lieee from '../assets/termini_it3_msk.jpg';
import lirrr from '../assets/termini_it3_ystbe.jpg';
import liQ from '../assets/termini_it4_medf.jpg';
import liW from '../assets/termini_it4_stln.jpg';
import liE from '../assets/termini_it4_bl.jpg';
import liR from '../assets/termini_it4_plws.jpg';
import liQQ from '../assets/termini_it5_xjp.jpg';
import liWW from '../assets/termini_it5_amstd.jpg';
import liEE from '../assets/termini_it5_lsj.jpg';
import liRR from '../assets/termini_it5_jlp.jpg';

import imgone from '../assets/17072891.jpg';
import imgtwo from '../assets/17072892.jpg';
import imgthree from '../assets/17072893.jpg';
import imgfour from '../assets/17051704.jpg';

export default {
  name: 'HelloWorld',
  data () {
    return{
      itemimg:[
        {imgs:img1},
        {imgs:img2},
        {imgs:img3},
        {imgs:img4},
        {imgs:img5}
      ],
      span:['国内酒店','国际酒店'],
      span_two:['国内机票','国际机票'],
      accordionImg:[
        {imgs:imga,accList:'园林酒店'},
        {imgs:imgb,accList:'情侣酒店'},
        {imgs:imgc,accList:'设计师酒店'},
        {imgs:imgd,accList:'青年旅舍'},
        {imgs:imge,accList:'特色客栈'},
        {imgs:imgf,accList:'海岛酒店'},
        {imgs:imgg,accList:'海外温泉'}
      ],
      detailsSpan:[
        {title:'登高踏青',
          date:[
            {img:lia,list:'黄山',text:'春意撩人 登高踏青赏春色'},
            {img:lib,list:'峨眉山',text:'阳春三月 闻着茶香去峨眉'},
            {img:lic,list:'五台山',text:'迎春 祈福 登五台'},
            {img:lid,list:'庐山',text:'亲近自然 春游庐山'}
          ]
        },
        {title:'小憩温泉',
          date:[
            {img:liaa,list:'江苏天目湖',text:'古树错落 帝王温泉'},
            {img:libb,list:'威海天沐威海温泉',text:'森林温泉 草本养生'},
            {img:licc,list:'广东中山温泉',text:'毗邻港澳 商务养生'},
            {img:lidd,list:'辽宁大连安波温泉',text:'延年益寿 名誉中外'}
          ]
        },
        {title:'天然氧吧',
          date:[
            {img:liA,list:'拉萨',text:'高原古城 圣山天湖 沁人心脾'},
            {img:liB,list:'大理',text:'文献名邦 彩云之南 空谷幽兰'},
            {img:liC,list:'舟山',text:'东海翡翠 舟山群岛 气候宜人'},
            {img:liD,list:'厦门',text:'东海翡翠 舟山群岛 气候宜人'}
          ]
        },
        {title:'草原撒欢',
          date:[
            {img:liAA,list:'锡林郭勒',text:'草原 牧民 小马驹'},
            {img:liBB,list:'坝上',text:'帝都最近的草原'},
            {img:liCC,list:'若尔盖',text:'高原上的绿洲'},
            {img:liDD,list:'祁连山',text:'风景如画 醉美祁连山'}
          ]
        },
        {title:'小镇时光',
          date:[
            {img:liaaa,list:'西塘',text:'烟雨长廊 景色好似宣纸画'},
            {img:libbb,list:'和顺',text:'古风犹存 如诗如画'},
            {img:liccc,list:'乌镇',text:'推窗见水 小桥人家'},
            {img:liddd,list:'平遥',text:'晋商遗风 古城探幽'}
          ]
        },
        {title:'美食之城',
          date:[
            {img:liAAA,list:'香港',text:'只有想不到，没有找不到'},
            {img:liBBB,list:'成都',text:'不只有火锅，吃是头等事'},
            {img:liCCC,list:'扬州',text:'吴侬软语 淮味养人'},
            {img:liDDD,list:'长沙',text:'美食怕不辣，湘味最十足'}
          ]
        }
      ],

      detailsSpan_two:[
        {title:'文艺清新',
          date:[
            {img:liq,list:'伦敦',text:'风情英伦，帝国余韵'},
            {img:liw,list:'清迈',text:'泰北玫瑰，慢行古城'},
            {img:lie,list:'济州岛',text:'最传统的浪漫，最神秘的自然'},
            {img:lir,list:'罗马',text:'永恒之城，魅力无限'}
          ]
        },
        {title:'面朝大海',
          date:[
            {img:liqq,list:'普吉岛',text:'海岛胜地，天人合一'},
            {img:liww,list:'马尔代夫',text:'一岛一世界'},
            {img:liee,list:'沙巴',text:'纯净之极的原生态梦幻岛屿'},
            {img:lirr,list:'夏威夷',text:'凝聚着东方妩媚与西方性感'}
          ]
        },
        {title:'别样建筑',
          date:[
            {img:liqqq,list:'巴塞罗那',text:'天使之城，艺术之都'},
            {img:liwww,list:'米兰',text:'在时尚与古典间穿梭'},
            {img:lieee,list:'莫斯科',text:'畅饮伏特加的英雄之城'},
            {img:lirrr,list:'伊斯坦布尔',text:'古老与现代辉映，东方与西方交融'}
          ]
        },
        {title:'浪漫主义',
          date:[
            {img:liQ,list:'马尔代夫',text:'一岛一世界'},
            {img:liW,list:'圣托里尼',text:'蓝白色的人间伊甸园'},
            {img:liE,list:'巴黎',text:'浪漫如斯，热情如是'},
            {img:liR,list:'普罗旺斯',text:'薰衣草之乡'}
          ]
        },
        {title:'魅力都市',
          date:[
            {img:liQQ,list:'新加坡',text:'乐享狮城，多彩四季'},
            {img:liWW,list:'阿姆斯特丹',text:'郁金香绽放的水都'},
            {img:liEE,list:'洛杉矶',text:'好莱坞的风情'},
            {img:liRR,list:'吉隆坡',text:'双子塔上，气度非凡'}
          ]
        }
      ],

      detailsSpan_three:[
        {title:'北京出发',
          date:[
            {start:'北京',destination:'大连',month:'12月11日',money:'￥140',discount:'1.6'},
            {start:'北京',destination:'烟台',month:'12月12日',money:'￥205',discount:'1.4'},
            {start:'北京',destination:'银川',month:'12月13日',money:'￥155',discount:'1.8'},
            {start:'北京',destination:'太原',month:'12月14日',money:'￥120',discount:'1.2'},
            {start:'北京',destination:'青岛',month:'12月15日',money:'￥175',discount:'1.5'},
            {start:'北京',destination:'兰州',month:'12月16日',money:'￥200',discount:'1.6'}
          ]
        },
        {title:'上海出发',
          date:[
            {start:'上海',destination:'宁波',month:'12月11日',money:'￥300',discount:'1.9'},
            {start:'上海',destination:'南京',month:'12月12日',money:'￥105',discount:'1.5'},
            {start:'上海',destination:'大连',month:'12月13日',money:'￥210',discount:'2.1'},
            {start:'上海',destination:'合肥',month:'12月14日',money:'￥250',discount:'2.2'},
            {start:'上海',destination:'温州',month:'12月15日',money:'￥300',discount:'1.6'},
            {start:'上海',destination:'泉州',month:'12月16日',money:'￥190',discount:'1.7'}
          ]
        },
        {title:'广州出发',
          date:[
            {start:'广州',destination:'揭阳',month:'12月11日',money:'￥240',discount:'2.5'},
            {start:'广州',destination:'南宁',month:'12月12日',money:'￥290',discount:'1.9'},
            {start:'广州',destination:'长沙',month:'12月13日',money:'￥305',discount:'2.2'},
            {start:'广州',destination:'贵州',month:'12月14日',money:'￥200',discount:'2.4'},
            {start:'广州',destination:'武汉',month:'12月15日',money:'￥160',discount:'1.5'},
            {start:'广州',destination:'南昌',month:'12月16日',money:'￥155',discount:'1.8'}
          ]
        },
        {title:'杭州出发',
          date:[
            {start:'杭州',destination:'青岛',month:'12月11日',money:'￥130',discount:'2.0'},
            {start:'杭州',destination:'桂林',month:'12月12日',money:'￥170',discount:'2.1'},
            {start:'杭州',destination:'泉州',month:'12月13日',money:'￥170',discount:'1.8'},
            {start:'杭州',destination:'烟台',month:'12月14日',money:'￥190',discount:'1.2'},
            {start:'杭州',destination:'西安',month:'12月15日',money:'￥245',discount:'1.5'},
            {start:'杭州',destination:'武汉',month:'12月16日',money:'￥205',discount:'1.6'}
          ]
        },
        {title:'深圳出发',
          date:[
            {start:'深圳',destination:'南宁',month:'12月11日',money:'￥140',discount:'1.9'},
            {start:'深圳',destination:'无锡',month:'12月12日',money:'￥150',discount:'1.6'},
            {start:'深圳',destination:'西安',month:'12月13日',money:'￥360',discount:'2.2'},
            {start:'深圳',destination:'兰州',month:'12月14日',money:'￥280',discount:'1.4'},
            {start:'深圳',destination:'温州',month:'12月15日',money:'￥130',discount:'2.4'},
            {start:'深圳',destination:'南昌',month:'12月16日',money:'￥175',discount:'1.8'}
          ]
        },
        {title:'成都出发',
          date:[
            {start:'成都',destination:'兰州',month:'12月11日',money:'￥160',discount:'1.8'},
            {start:'成都',destination:'乌鲁木齐',month:'12月12日',money:'￥210',discount:'2.5'},
            {start:'成都',destination:'银川',month:'12月13日',money:'￥250',discount:'2.2'},
            {start:'成都',destination:'西宁',month:'12月14日',money:'￥250',discount:'1.6'},
            {start:'成都',destination:'宜昌',month:'12月15日',money:'￥240',discount:'1.8'},
            {start:'成都',destination:'昆明',month:'12月16日',money:'￥200',discount:'1.9'}
          ]
        }
      ],

      detailsSpan_four:[
        {title:'北京出发',
          date:[
            {start:'北京',destination:'大连',month:'12月11日',money:'￥140'},
            {start:'北京',destination:'烟台',month:'12月12日',money:'￥205'},
            {start:'北京',destination:'银川',month:'12月13日',money:'￥155'},
            {start:'北京',destination:'太原',month:'12月14日',money:'￥120'},
            {start:'北京',destination:'青岛',month:'12月15日',money:'￥175'},
            {start:'北京',destination:'兰州',month:'12月16日',money:'￥200'}
          ]
        },
        {title:'上海出发',
          date:[
            {start:'上海',destination:'宁波',month:'12月11日',money:'￥300'},
            {start:'上海',destination:'南京',month:'12月12日',money:'￥105'},
            {start:'上海',destination:'大连',month:'12月13日',money:'￥210'},
            {start:'上海',destination:'合肥',month:'12月14日',money:'￥250'},
            {start:'上海',destination:'温州',month:'12月15日',money:'￥300'},
            {start:'上海',destination:'泉州',month:'12月16日',money:'￥190'}
          ]
        },
        {title:'广州出发',
          date:[
            {start:'广州',destination:'揭阳',month:'12月11日',money:'￥240'},
            {start:'广州',destination:'南宁',month:'12月12日',money:'￥290'},
            {start:'广州',destination:'长沙',month:'12月13日',money:'￥305'},
            {start:'广州',destination:'贵州',month:'12月14日',money:'￥200'},
            {start:'广州',destination:'武汉',month:'12月15日',money:'￥160'},
            {start:'广州',destination:'南昌',month:'12月16日',money:'￥155'}
          ]
        },
        {title:'深圳出发',
          date:[
            {start:'深圳',destination:'青岛',month:'12月11日',money:'￥130'},
            {start:'深圳',destination:'桂林',month:'12月12日',money:'￥170'},
            {start:'深圳',destination:'泉州',month:'12月13日',money:'￥170'},
            {start:'深圳',destination:'烟台',month:'12月14日',money:'￥190'},
            {start:'深圳',destination:'西安',month:'12月15日',money:'￥245'},
            {start:'深圳',destination:'武汉',month:'12月16日',money:'￥205'}
          ]
        },
        {title:'天津出发',
          date:[
            {start:'天津',destination:'南宁',month:'12月11日',money:'￥140'},
            {start:'天津',destination:'无锡',month:'12月12日',money:'￥150'},
            {start:'天津',destination:'西安',month:'12月13日',money:'￥360'},
            {start:'天津',destination:'兰州',month:'12月14日',money:'￥280'},
            {start:'天津',destination:'温州',month:'12月15日',money:'￥130'},
            {start:'天津',destination:'南昌',month:'12月16日',money:'￥175'}
          ]
        },
        {title:'厦门出发',
          date:[
            {start:'厦门',destination:'兰州',month:'12月11日',money:'￥160'},
            {start:'厦门',destination:'乌鲁木齐',month:'12月12日',money:'￥210'},
            {start:'厦门',destination:'银川',month:'12月13日',money:'￥250'},
            {start:'厦门',destination:'西宁',month:'12月14日',money:'￥250'},
            {start:'厦门',destination:'宜昌',month:'12月15日',money:'￥240'},
            {start:'厦门',destination:'昆明',month:'12月16日',money:'￥200'}
          ]
        }
      ],

      guide:['小朋友超爱的三亚酒店','7条航线带你“邮”世界','盘点国内52处世界遗产','青岛七星酒店住一晚'],
      guides:[imgone,imgtwo,imgthree,imgfour],
      itemList:[1,2,3,4,5],
      textcut:['酒店','机票','火车票','手机版'],
      spanNum:0,
      spanNum_two:0,
      nb:0,
      number:0,
      num:0,
      nums:0,
      Num:0,
      Nums:0,
      NUM:0,
      NUMS:0,
      NUMStwo:0,
      NUMtwo:0,
      name:0,
      names:0,
      time:''
    }
  },
  methods:{
    lunCut:function(index){
      let carousel=document.getElementsByClassName('carousel_typeOne')[0].getElementsByClassName('typeaa');
      for(let ii=0;ii<carousel.length;ii++){
        if(ii==index){
          carousel[index].style.display='block'
        }else{
          carousel[ii].style.display='none'
        }
      }
      this.nb=index
      // alert(index)
    },
    change:function(index){
      this.number=index;
    },
    spanBg:function(index){
      let one_map=document.getElementsByClassName('one_map')[0];
      let one_value=document.getElementsByClassName('one_value')[0];
      this.spanNum=index
      if(index==1){
        one_map.style.display='none'
        one_value.placeholder='商圈/位置/酒店名'
      }else{
        one_map.style.display='inline-block'
        one_value.placeholder='如位置\酒店名\品牌'
      }
    },
    spanBg_two:function(index){
      let p_two=document.getElementsByClassName('p_two')[0].getElementsByTagName('input');
      let input_two=document.getElementsByClassName('input_two')[0].getElementsByTagName('input');
      for(let i=0;i<p_two.length;i++){
        if(index==1){
          p_two[0].value='北京';
          p_two[1].value='上海';
        }else{
          p_two[i].value=''
          p_two[i].placeholder='中文/拼音/首字母';
        }
        // for(var a=0;a<input_two.length;a++){
        //   if(input_two[0].checked=true){
        //     input_two[1].checked=false;
        //   }else{
        //     input_two[1].checked=true;
        //   }
        // }
        
      }
      this.spanNum_two=index;
      // alert(index)
    },    
    move:function(){
      this.time=setInterval(()=>{
        this.number++;
        if(this.number>4){
          this.number=0;
        }
      },3000);
    },
    mouseover:function(index){
      let accord=document.getElementsByClassName('accordion')[0];
      let accordLi=accord.getElementsByTagName('li');
      let accordDiv=accord.getElementsByTagName('div');
      for(let i=0;i<accordLi.length;i++){
        if(i==index){
          accordLi[index].style.width=400+'px';
        }else{
          accordLi[i].style.width=800/6+'px';
          accordDiv[i].style.width=800/6+'px';
        }
      }
    },
    mouseout:function(index){
      let accord=document.getElementsByClassName('accordion')[0]
      let accordLi=accord.getElementsByTagName('li');
      let accordDiv=accord.getElementsByTagName('div');
      for(let i=0;i<accordLi.length;i++){
        accordLi[i].style.width=1200/7+'px';
        accordDiv[i].style.width=1200/7+'px';
      }
    },
    cutDeta:function(index){
      this.num=index;
      this.nums=index;
    },
    cutDeta_two:function(index){
      this.Num=index;
      this.Nums=index;
    },
    cutDeta_three:function(index){
      this.NUM=index;
      this.NUMS=index;
    },
    cutDeta_four:function(index){
      this.NUMtwo=index;
      this.NUMStwo=index;
    },
    guideLi:function(index){
      this.name=index;
      this.names=index;
    }
  },
    
  mounted:function(){
    this.move();
  }
}
</script>

