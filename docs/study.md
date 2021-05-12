## Vue Study 1

이 글은 [유튜브강의](https://www.youtube.com/watch?v=bxxZmYUpg6M)의 전반부 1~13강을 듣고 공부한 내용을 정리했다.

후반부는 Vue Cli를 이용해서 따로 정리했다.

### 1, 2강

1. `{{}}` 를 통해서 변수, 메소드에 접근 가능하다.

```html
<div id="app">
    {{ dataVariableName }}
    {{ methodName() }}
</div>
```

1. `new Vue({})` 를 통해서 생성가능하다.
2. `el` 을 통해서 원소 연결이 가능하다.
3. `data` 의 경우 중접이 가능하다.
4. `methods` 의 경우 여러 함수를 선언할 수 있고 `this` 키워드를 통해서 같은 객체 내의 변수, 함수에 접근할 수 있다.

```vue
new Vue({
	el : "#app",
	data : {
		dataVariableName,
		dataOne : {
			dataTwo : "hello"
		}
	},
	methods : {
		methodName(args){
			return "hello world" + args;
		},
		methodName2 : function(args){
			return this.dataOne.dataTwo;
		}
	}
	
})
```



### 3강

데이터 바인딩

```html
<a :link="getLink()">{{name}}</a>

<script>
    new Vue({
        data: {
            name:"hankyul"
        },
        methods:{
            getLink(){
                return "https://github.com/hankyul2";
            }
        }
    })
</script>
```



### 4강

이벤트 리스너 바인딩

```html
<form v-on:submit.prevent="submit">
    <input type="text"><br>
    <button type="submit">
        Submit
    </button>
</form>

<script>
	new Vue({
        methods:{
            submit(){
                alert("submitted");
            }
        }
    })
</script>
```



### 5강

양방향 바인딩이란 데이터가 html에서 바뀌었을 때, javascript 안에서 바뀌었을 때 둘 다에 적용되도록 바꾸는 것을 말한다.

이것을 두개의 방식으로 구현할 수 있다. 하나는 Event Listener를 통해서 구현하는 방법이고 하나는 v-bind를 통해서 구현하는 방법이다.

1. Event Listener

   @ = v-on:

   keyup = 키보드가 눌렸다가 때졌을때

   ```html
   <input type="text" @keyup="changeText", :value="text">
   {{text}}
   <script>
   	new Vue({
           data:{
               text:"hello"
           },
           methods:{
               changeText(event){
                   this.text = event.target.value;
               }
           }
       })
   </script>
   ```

2. V-model 

   v-model 을 정해줌으로써 매우 간편하게 양방향 바인딩을 구현할 수 있다.

   ```html
   <input v-model="text">
   {{text}}
   <script>
   	new Vue({
           data:{
               text:"hello"
           }
       })
   </script>
   ```

   

### 6강

Computed 속성이란? 

method를 사용하기에는 너무 자주 사용되서 변수처럼 사용하고 싶지만 어떤 값에 종속적으로 변경될때 사용.

즉, 캐시 데이터를 통해서 Dependency가 있는 데이터가 바뀔 때만 업데이트 된다.

```html
<input type="text" v-model="original_sentences">
{{ original_sentences }}
{{ reversed_sentences }}
<script>
	new Vue({
        data:{
            original_setences:"This is hello world sentences"
        },
        computed:{
            reversed_sentences(){
                return original_sentences.split(" ").reverse().join(" ");
            }
        }
    })
</script>
```





### 7강

watch 란 어떤 데이터가 변경됬을 때의 행동을 지정해 줄 수 있는 기능이다.

Vue 공식문서에서는 대부분의 경우 Computed가 더 났다고 말하고 있습니다. 하지만 생각해보면 하나의 변수에 다양한 값들이 종속되어 있다면 Watch를 사용하는 것 또한 나쁘지 않습니다.

사용법은 아래와 같습니다.

```html
{{ name }}
<button @click="updateName">
    Update Info
</button>
{{ age }}
{{ school }}
{{ favorite food }}

<script>
	new Vue({
        data:{
            name : "hankyul",
            age : 25,
            school: "ajou",
            favorite_food: "naeng meon"
        },
        methods:{
            updateName(){
                this.name="google";
            }
        },
        watch:{
            name(oldVal, newVal){
                this.age = 15;
                this.school = Alphabet;
                this.favorite_food ="people's knowlegde";
            }
        }
    })
</script>
```



### 8강

클래스와 스타일 바인딩

클래스와 스타일의 바인딩을 동적을 변경할 수 있다.

```html
<head>
    <style>
        . red {
            color:red;
        }
    </style>
</head>

<body>
    <div :class="{ red: isRed }">
        hello
    </div>
</body>

<script>
	new Vue({
        data:{
            isred:false
        },
        methods:{
            update(){
                this.isRed = !this.isRed;
            }
        }
    })
</script>
```



### 9강

V-If, V-else-if, V-else : if -> 조건문이 True일 경우에 element를 보여준다. else -> 조건문이 False일 경우 element를 보여준다.

V-show : display만 바꿔준다.

두개의 차이는 V-show는 매우 자주 바뀔 때 사용하고 V-if는 자주 바뀌지 않을 때 사용할 수 있다.

```html
<div v-if="number == 1">
    1
</div>
<div v-else-if="number == 2">
    2
</div>
<div v-else>
    3
</div>

<button @click="increaseNumber">
    increaseNumber
</button>


<script>
	new Vue({
        data:{
            number:1
        },
        methods:{
            increaseNumber(){
                this.number++;
            }
        }
    })
</script>
```



### 10강

v-for

```html
<script>
    <div v-for="{object, index} in listObject" :key="object.id">
		{{ object.name }} {{ object.age }}
	</div>
</script>

```



### 11강

여러개의 Vue 인스턴스를 만들고 각각의 인스턴스에 접근해서 업데이트 하기

```html
<body>
    <div id="app">
        {{ name }}
    </div>
    <div id="app2">
        {{ name }}
    </div>
</body>

<script>
	var app = new Vue({
        data:{
            name : "hi"
        },
        methods:{
            update(){
                app2.update();
            }
        }
    })
    var app2 = new Vue({
        data:{
            name :"hi"
        },
         methods:{
            update(){
                this.name = "hello";
            }
        }
    })
</script>
```



### 12강

Vue Component

전역, 지역 컴포넌트를 만들 수 있다.

컴포넌트의 경우 재사용될 때 마다 Data가 사용될 경우 Reference로 주소가 전달 되기 때문에 이를 방지하고자 data라는 함수의 Return 값으로 대신한다.

전역, 지역 컴포넌트는 모두 Root Component 전에 선언되어야 한다.

전역 컴포넌트의 경우 루트 컴포넌트 아래의 어디서든 사용할 수 있고 지역 컴포넌트의 경우 기존 Root Component에서만 사용할 수 있다.

전역 컴포넌트

```html
<div id="app">
    <hankyul></hankyul>
</div>

<script>
    
	Vue.component("hankyul-local", {
        template:`
			{{ name }}
			<button @click="click">click me</button>
			<hr>
		`,
        data() {
            return {
                name : "hankyul"
            }
        },
        methods:{
            click(){
                this.name = "button clicked"
            }
        }
    });
    var app = new Vue({
        el: "#app",
        data : {
            name:"hi"
        },
        methods:{
            hello(){
                return "hello"
            }
        }
    })
</script>
```



지역 컴포넌트

```html
<div id="app">
    <hankyul-local-button></hankyul-local-button>
</div>

<script>
    var hankyulButton = {
        template: `
		{{ name }}
		<button @click="click">Click Me</button>
		<hr>
		`,
        data () {
            return {
                name : "hello"
            }
        },
        methods : {
            click(){
                this.name = "button clicked"
            }
        }
    };
    
    var app = new Vue({
        el: "#app",
        components:{
            'hankyul-local-button': hankyulButton
        }
        data : {
            name:"hi"
        },
        methods:{
            hello(){
                return "hello"
            }
        }
    })
</script>
```



