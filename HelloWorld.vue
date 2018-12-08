<template>
<div>
    <div class="header"  v-bind:class="{islogin:!isLogin}">
       <h1>天乙周报</h1>
    </div> 
    <div class="container">
        <div class="tab"  v-bind:class="{islogin:!isLogin}">
            <ul class="tabtitle">
                <li>项目类别</li>
                <li>业务类型</li>
                <li>子业务</li>
                <li>进度（单击可编辑）</li>
                <li>时间点</li>
                <li>负责人</li>
            </ul>
            <ul class="level1"  v-for="(item,index) in datalist">
                <li  class="txtleft" >
                    {{item.content}}
                </li>
                <li>
                    <ul class="level2"  border-spacing="0" cellpadding="0"  v-if="item.sub_nodes.length == 0">
                        <li class="spepadding txtleft">
                            无
                        </li>
                        <li>
                            <ul class="level3">
                                <li class="spewidth  spepadding txtleft">
                                    无
                                </li>
                                <li class="spewidth  spepadding txtleft">        
                                    无
                                </li>
                                <li v-if="item.isall" class="speheight" >
                                    <div class="speheight green" v-if="new Date(item.end_date) > new Date()">
                                        <div>
                                            {{item.end_date |formaDate}}
                                        </div>
                                        <button @click='finish(item,index)'>提前完成</button>
                                    </div>
                                    <div class="speheight red" v-else>
                                        <div>
                                            {{item.end_date |formaDate}}
                                        </div>
                                        <button @click="finish(item,index)">完成</button>
                                        <button @click="unfinish(item,index)">未完成</button>                                    
                                    </div>
                            
                                </li>
                                <li v-if="item.isshow1" class="finished txtleft" >
                                    <span>{{item.end_date |formaDate}}</span>
                                </li>
                                <li v-if="item.isshow2" class="unfinished txtcenter">
                                    <span>{{item.end_date |formaDate}}</span>
                                    <p>请填写未完成原因</p>
                                    <textarea autofocus v-model="item.delay_reason"></textarea>
                                    <br>
                                    <button @click="confirm(item,index,'')">确认</button>
                                </li>
                                <li v-if="item.isshow3" class="unfinished" >
                                    <div class=" speheight">
                                        {{item.end_date |formaDate}}
                                    </div>
                                    
                                    <div class=" spewidth spepadding  txtleft1">延迟原因：{{item.delay_reason}}</div>
                                </li>
                                <li class="txtleft">
                                        {{item.principal.name}}                                                        
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="level2" v-else v-for="(item1,index) in item.sub_nodes">
                        <li class="txtleft spepadding" >
                            {{item1.content}}
                        </li>
                        <li>
                            <ul class="level3 txtleft"  v-if="item1.sub_nodes == 0" >
                                <li class="spewidth spepadding txtleft">无</li>
                                <li @click="alter(item1,index)"   v-show="!item1.isshow"  class="spewidth spepadding txtleft1">
                                    {{item1.current_progress}}
                                </li>
                                <li v-show="item1.isshow"  class="spewidth spepadding txtcenter">
                                    <textarea class="edit_ta spetextarea" v-model="item1.current_progress" autofocus></textarea><br>
                                    <button class="btn_save" @click="save(item1,index)">保存</button>
                                </li>                    
                                <li v-if="item1.isall" class="speheight"  >
                                    <div class="green" v-if="new Date(item1.end_date) > new Date()">
                                        <div>
                                            {{item1.end_date |formaDate}}
                                        </div>
                                        <button @click='finish(item1,index)'>提前完成</button>
                                    </div>
                                    <div class="red" v-else>
                                        <div>{{item1.end_date |formaDate}}</div>
                                        <button @click="finish(item1,index)">完成</button>
                                        <button @click="unfinish(item1,index)">未完成</button>
                                    </div>
                                </li>
                                <li v-if="item1.isshow1"  class="finished txtleft"  >
                                    <div class="speheight">{{item1.end_date |formaDate}}</div>
                                </li>
                                <li v-if="item1.isshow2" class="unfinished txtcenter" >
                                    <span>{{item1.end_date |formaDate}}</span>
                                    <p>请填写未完成原因</p>
                                    <textarea autofocus v-model="item1.delay_reason"></textarea>
                                    <br>
                                    <button @click="confirm(item1,index,item.content)">确认</button>
                                </li>
                                <li  v-if="item1.isshow3" class="unfinished"   >
                                    <div class='speheight'>{{item1.end_date |formaDate}}</div>
                                    <div class="txtleft1  spewidth spepadding ">延迟原因：{{item1.delay_reason}}</div>
                                </li>
                                <li  class="txtleft">
                                    {{item1.principal.name}}
                                </li>
                            </ul>
                            <ul class="level3" v-else v-for="item2 in item1.sub_nodes" >
                                <li class="spewidth txtleft1 spepadding"  >
                                    {{item2.content}}
                                </li>
                                <li v-show="!item2.isshow"  @click="alter(item2,index)"  class="spewidth spepadding txtleft1">
                                        {{item2.current_progress}}
                                </li>
                                <li v-show="item2.isshow"  class="spewidth spepadding txtcenter">
                                        <textarea class="edit_ta spetextarea" v-model="item2.current_progress" autofocus></textarea><br>
                                        <button class="btn_save" @click="save(item2,index)">保存</button>
                                </li>
                                <li v-if="item2.isall" class="speheight" >
                                    <div  class="green" v-if="new Date(item2.end_date) > new Date()">
                                        <div>
                                            {{item2.end_date |formaDate}}
                                        </div>
                                        <button @click='finish(item2,index)'>提前完成</button>
                                    </div>
                                    <div class="red " v-else>
                                        <div>
                                            {{item2.end_date |formaDate}}
                                        </div>
                                        <button @click="finish(item2,index)">完成</button>
                                        <button @click="unfinish(item2,index)">未完成</button>
                                    </div>
                                
                                </li>    
                                <li v-if="item2.isshow1" class="finished txtleft"  >
                                    <div class="speheight">{{item2.end_date |formaDate}}</div>
                                </li>
                                <li v-if="item2.isshow2" class="unfinished txtcenter"   >
                                    <span>{{item2.end_date |formaDate}}</span>
                                    <p>请填写未完成原因</p>
                                    <textarea autofocus v-model="item2.delay_reason"></textarea>
                                    <br>
                                    <button @click="confirm(item2,index,item1.content)">确认</button>
                                </li>
                                <li v-if="item2.isshow3" class="unfinished"  >
                                    <div class="txtleft speheight">{{item2.end_date |formaDate}}</div>
                                    <div class="txtleft1  spewidth spepadding ">延迟原因：{{item2.delay_reason}}</div>
                                </li>
                                <li  class="txtleft" >
                                    {{item2.principal.name}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>        
        <div class="preview"  v-bind:class="{islogin:!isLogin}">
            <div class="preview-border">
                    <h3>预览</h3> 
                    <!-- 项目预警 -->
                    <div v-if="isShow">
                        <h4 class="txtleft">项目预警</h4>
                        <p v-for="(item,index) in unfinishList" class="txtleft txtline">
                            <span class="father" v-if="item.zhu!=0">{{item.zhu}}<span class="blackcolor">&nbsp;的</span></span>
                            <span class="child">{{item.zi.split("；")[0]}}</span>
                            <span>环节,原定</span>
                            <span>{{item.time|formaDate}}完成；因</span>
                            <span class="reason">{{item.yuanyin}}</span>
                            <span>，未如期结束</span>
                        </p>
                        <hr>
                    </div>
                    <div v-for="(item,index) in datalist" class="txtlfet txtline">
                        <div>
                            <span>{{index+1}}、{{item.content}}</span>
                        </div>
                        <p v-if="item.sub_nodes.length==0">
                        </p>
                        <div v-else v-for="(item1,idx) in item.sub_nodes"  class="txtindent">
                            {{idx+1}}）、{{item1.content}}
                            <div v-if="item1.sub_nodes.length==0"  class="txtindent1">
                                {{item1.current_progress}}
                            </div>
                            <div v-else v-for="(item2,idx1) in item1.sub_nodes"  class="txtindent1">
                                （{{idx1+1}}）、
                                {{item2.content}}
                                {{item2.current_progress}}
                            </div>
                        </div>
                    </div>
            </div> 
        </div> 
    </div>


    <div v-bind:class="{islogin:isLogin}">
        <h1>系统检测到您尚未登录</h1>
    </div>
</div> 
</template>

<script>
export default {
  name:'HelloWorld',
    data(){
        return{
            flag:document.cookie.indexOf('ALF'),
            tableList:[],
            isEditing:false,
            isShow:false,
            unfinishList:[],
            datalist:'',
            idx:1,
            result:'',
            apiUrl:'http://10.222.38.22:3000/get?callback=jsoncallback123123',
            isLogin:SINA_OUTLOGIN_LAYER.isLogin(),
            uid:''      
        }
    },
    watch:{
        isLogin:function(){
            // 判断用户是否登录
            if(SINA_OUTLOGIN_LAYER.isLogin()){
                this.isLogin=SINA_OUTLOGIN_LAYER.isLogin()
                this.uid=SINA_OUTLOGIN_LAYER.getSinaCookie().uid;
                console.log('watch,您登录了')
                // 对权限进行判断 并获取数据
                // this.getCustomers(this.uid);
            }   
            else{
                this.uid='';
                console.log('watch,您还未登录');
            }            
        }
    },
    created () {  
        // 判断用户是否登录
        if(SINA_OUTLOGIN_LAYER.getSinaCookie()){
                    console.log('created,您已经登录了。')
                    this.isLogin=true;
                    this.uid=SINA_OUTLOGIN_LAYER.getSinaCookie().uid;
                    // 对权限进行判断 并获取数据
                    // this.getCustomers(this.uid);
                }   
                else{
                    this.isLogin=false;
                    this.uid='';
                    console.log('created,您还未登录')
                }
        this.validtor();
    },
    methods:{
        // 对权限进行判断并获取数据
        getCustomers(uid){
            this.$http.post(this.apiUrl,{uid:uid},{emulateJSON:true}).then(function(response){
                if(response.data.status == 0){
                    this.isLogin=false;
                    console.log('您没有权限'); 
                }
                else{
                    this.isLogin=true;
                    // 验证权限通过，获取数据并对数据进行处理
                    this.setData(response);
                }             
            }).catch(function(res){
                console.log(res);
                console.log('请求失败');
            });
        }, 
        // 对数据进行处理,并进行页面渲染
        setData(response){
                this.result=JSON.parse(response.data.split('(')[1].split(')')[0]).data.lists;
                this.datalist=this.result;
                // console.log("请求成功");
                for(var i=0;i<this.datalist.length;i++){
                    this.datalist[i]=Object.assign({},this.datalist[i],{isshow:false,isall:true,isshow1:false,isshow2:false,isshow3:false});  
                    if(this.datalist[i].sub_nodes.length != 0){
                        for(var j=0;j<this.datalist[i].sub_nodes.length;j++){
                            this.datalist[i].sub_nodes[j]= Object.assign({},this.datalist[i].sub_nodes[j],{isshow:false,isall:true,isshow1:false,isshow2:false,isshow3:false});
                            if(this.datalist[i].sub_nodes[j].sub_nodes.length != 0){
                                for(var k=0;k<this.datalist[i].sub_nodes[j].sub_nodes.length;k++){
                                    this.datalist[i].sub_nodes[j].sub_nodes[k]= Object.assign({},this.datalist[i].sub_nodes[j].sub_nodes[k],{isshow:false,isall:true,isshow1:false,isshow2:false,isshow3:false});
                                }
                            }
                        }
                    }
                }
        },
        // setInterval 实时监测用户的登录状态
        validtor(){
            setInterval(()=>{
                if(SINA_OUTLOGIN_LAYER.getSinaCookie()){
                    // console.log('您已经登录了。')
                    this.isLogin=true
                }   
                else{
                    // console.log('您还未登录')
                    this.isLogin=false;
                }           
            },3000);
        },
        // 编辑进度
        alter(item,index){
            item.isshow=true; 
            console.log(this.datalist)
            console.log('isshow:');
            console.log(item.isshow);
            const cacheData= this.datalist
            this.datalist=[]
            this.datalist=cacheData
        },
        // 保存进度
        save(item,index){
            item.isshow=false;
            const cacheData= this.datalist;
            this.datalist=[];
            this.datalist=cacheData;   
            this.$http.post("http://10.222.38.22:3000/edit",
            {'id':item.id,'parent_id':item.parent_id,'level':item.level,"current_progress":item.current_progress},
            {emulateJSON:true}).then(function(res){
                console.log(res);
            }).catch(function(re){
                console.log(res);
                console.log('请求失败');
            });      
        },
        // 已完成
        finish(item,index){
            item.isshow1=true;     
            item.isall=false;
            item.delay_reason='';    
            const cacheData= this.datalist;
            this.datalist=[];
            this.datalist=cacheData; 
            // ,"is_finished":0
            this.$http.post("http://10.222.38.22:3000/edit",
            {'id':item.id,'parent_id':item.parent_id,'level':item.level,"is_finished":1},
            {emulateJSON:true}).then(function(res){
                console.log(res);
            }).catch(function(res){
                console.log(res);
                console.log('请求失败');
            });             
        },
        // 未完成
        unfinish(item,index){
            item.isshow2=true;
            item.isall=false;
            const cacheData= this.datalist;
            this.datalist=[];
            this.datalist=cacheData;
        },
        // 项目预警
        confirm(item,index,content){
            if(item.delay_reason.length != ''){
                item.isshow3=true;
                item.isshow2=false;
                this.unfinishList.push({
                        zhu:content,
                        zi:item.content,
                        yuanyin:item.delay_reason,
                        time:item.end_date
                    });
                
                this.isShow=true;
                const cacheData= this.datalist;
                this.datalist=[];
                this.datalist=cacheData;
                this.$http.post("http://10.222.38.22:3000/edit",
                {'id':item.id,'parent_id':item.parent_id,'level':item.level,"delay_reason":item.delay_reason},
                {emulateJSON:true}).then(function(res){
                    console.log(res);
                }).catch(function(res){
                    console.log(res);
                    console.log('请求失败');
                });
            }
        }
    },
  filters:{
      formaDate(time){
          let date = new Date(time);
          let year = date.getFullYear();
          let month = date.getMonth()+1;
          if(month.length==1){
              month="0"+month;
          }
          let date1=date.getDate();
          return ''+year+'年'+month+'月'+date1+'日';
      }    
  }
}
</script>

    <style scoped>
        ul{word-break: break-all; word-wrap: break-word;overflow:hidden; padding: 0px;margin: 0px; list-style: none;}
        ul li{float: left;}
        textarea{width: 180px;}
        .level1 li{min-height: 70px;}
        ul ul{border-style: hidden;}
        button{padding:2px 8px!important;border-radius:5px !important;background-color: white;color: #2DC1B7;font-size: 12px !important; border:1px dashed #2DC1B7;cursor: pointer;}
        p{margin: 3px 0px!important;}
        .level1 {border-left: 1px solid #dee2e6;width: 971px;}
        .level2 {border-left: 1px solid #dee2e6;}
        .level3 {border-left: 1px solid #dee2e6;}
        .level3 li{border-right: 1px solid #dee2e6;border-bottom: 1px solid #dee2e6;}
        .level1 li:nth-child(1){width: 103px;border-bottom: 1px solid #dee2e6;}
        .level2 li:nth-child(1){width: 142px;border-bottom: 1px solid #dee2e6;}
        .level3 li{ width: 200px;}
        .level3 li:last-child{width: 100px;}
        li.unborderbottom{border-bottom: 0px !important;}
        .topbottom>li{border-bottom: 1px solid #dee2e6;}
        li.spewidth{width: 192px !important;}
        .spepadding{padding-left: 4px;padding-right: 4px;}
        .finished{ background-color: #A9EFBE;}
        .unfinished{ background-color: rgb(252,215,194);}
        .mise{background-color:rgb(255,252,198); }
        .father{color: lightcoral;}
        .child{color: lightcoral;}
        .reason{color: lightcoral;}
        .blackcolor{color: #2c3e50;}
        .txtcenter{text-align: center;}
        li.txtleft{display: flex;align-items: center;justify-content: center;}
        .txtleft1{display: flex;align-items: center;text-align: left;}
        .txtline{line-height: 30px;}

        .islogin{display: none;}
        .preview-border{border:1px solid #dee2e6;text-align: left;padding: 6px;}
        .preview{margin-left: 20px;}
        .header h1{color: #2DC1B7;text-align: left;}
        .level1{display: flex;} 
        .level2{display: flex;}
        .level3{display: flex;}
        .container{display: flex;font-size: 14px;justify-content:space-between;}
        .tabtitle{text-align: center;display: flex;border-left: 1px solid #dee2e6;width: 970px;height: 60px;line-height: 60px;font-weight: bold;font-size: 16px;}
        .tabtitle li{width: 200px;border-right: 1px solid #dee2e6;background-color: #f8f9fa;border-top: 1px solid #dee2e6;border-bottom: 1px solid #dee2e6;}
        .tabtitle li:nth-child(1){width: 103px;border-top: 1px solid #dee2e6;border-bottom: 1px solid #dee2e6;}
        .tabtitle li:nth-child(2){width: 150px;}
        .tabtitle li:last-child{width: 100px;border-right: 1px solid #dee2e6;}
        .speheight{line-height: 30px;letter-spacing: 2px;text-align: center;}
        .spetextarea{margin-top: 5px;}
        .txtindent{text-indent: 2em;line-height: 30px;}
        .txtindent1{text-indent: 4em;line-height: 30px;}
        .red{color: black;height: 100%;background-color: rgb(255,252,198); }
        .green{color:black;background-color: white;height: 100%;}
        @media (max-width: 1300px) {.container {flex-direction: column;}.preview{margin-top: 30px;margin-left: 0px;max-width: 970px;}}
    </style>   
