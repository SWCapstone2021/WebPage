## Vue Study 2

### 13강

**NodeJs 설치**

NodeJs를 설치해야 한다. 노드JS는 홈페이지에서 설치할 수 있다. 다음 명령어를 통해서 vue를 설치할 수 있다.

```bash
node -v
npm -v
npm install -g @vue/cli
vue create test1 // Vuex, Router 나머지는 모두 Default
```



**Vue 설치시 생성되는 디렉토리**

1. Node_modules : Vue가 사용하는 Node Module
2. package.json : dependencies -> 배포하는데 필요한 모듈, devDependencies : 개발하는데만 필요한 dependency
3. src
   1. main.js : 
   2. App.vue : 
4. public : index.html



**실행하기**

이렇게 실행하면 Hot-loader 기능이 실행되서 소스코드가 수정되면 자동으로 반영된다.

```bash
npm run serve
```



### 14강

SPA = [SinglePage Application]

Single Page Application 이란 한개의 페이지만 있는 어플리케이션? --> 하나의 웹 페이지처럼 보이게 하는 프로그램

실행되는 순서

1. `public/index.html` 이 처음에 로드 됨
2. `src/main.js` 가 실행된다,
3. `src/App.vue` 파일에서 Router가 연결된다.
4. `src/router/index.js` 파일에서 routes를 설정할 수 있다.
5. `src/views/Home`, `src/views/About`가 주요 화면을 정의한다.
6. `src/components/HelloWorld`는 자주 사용되는 컴포넌트를 모아 둘 수 있다.





### 15강

Single File Component 만들기

총 3개로 구성요소인 template, script, style 로 나뉜다.

- 컴포넌트 참조하기 : `import componentName from '@/components/componentFileName.vue'` @는 src 폴더를 가리킨다.

- 컴포넌트 생성하기 : `export default { name: "componentName" }` 으로 만들면 생성할 수 있고 이렇게 생성한 컴포넌트를 다른 파일에서 참조할 수 있다. 나머지는 컴포넌트를 만드는 기초 강의를 다시 복습하고 오자!

```vue
<template>
 	<componentName2/>
</template>

<script>
import componentName2 from '@/components/componentFileName.vue'; 
    
    
export default{
    name: "componentName1",
    components: {
        componentName2
    }
}
</script>

<style scoped>
</style>
```





`src/` 폴더 아래에 있는 파일 스트럭쳐 설명

1. assets : 아직 정확히는 모르겠다. 추측해보면 사진 같은 것들이 들어가지 않을까?
2. components : 재활용 가능한 컴포넌트
3. router : 여러개의 화면을 라우팅하는 곳
4. store : 아직 정확히는 모르겠다.
5. views : 화면 하나 하나를 의미한다.



### 16강

Props : 만든 컴포넌트의 프로퍼티를 정할 수 있다. 뭔가 객체 생성 같은 느낌으로 매우 필요한 기능이다.

프롭스에서 매우 중요한 것은 받은 데이터를 수정하면 안된다는 것이다.

```vue
<script>
    export default {
        name:'hell',
        props:{
            title:{
                type:String, Object, Number,
                required:true,
                default: "hello"
            }
        }
    }
</script>
```



### 17강

자식 컴포넌트에서 부모컴포넌트로 데이터 보내기

총 3개의 모습으로 구현할 수 있다. 뭔가 이건 좀 어려웠다.

**방법 1** : Props와 Event를 이용한 방법이다.

- [ ] 부모 컴포넌트에서는 `:propName="value"`  를 통해서 프롭스 설정을 해준다.
- [ ] 부모 컴포턴드에서 `@eventName="MethodName"` 으로 이벤트를 리스닝 하면 된다.
- [ ] 자식 컴포넌트에서는 `props : { propName: {type:String, required:true} }`  으로 프롭 설정을 한다.
- [ ] `@input="MethodName"`으로 이벤트가 발생할 때 실행할 메소드를 설정하면 된다. 
- [ ] 이 메소스에서는 `this.$emit('event-name', event.target.value)` 으로 부모 메소드에 이벤트가 발생해서 변경된 값을 전달한다.

```vue
<template>
	<InputField :name="name" @update-name="updateName"/>
</template>

<script>
	export default {
        data(){
            return {
                name:'hello'
            }
        }
        methods:{
            updateName(name){
                this.name = name;
            }
        }
    }
</script>
```



```vue
<template>
		<input :value="name"
               @input='updateName'>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        updateName(e) {
            console.log(e.target.value);
            tihs.$emit('update-name', e.target.value);
        }
    }
}
</script>
```



**방법 2** : method 선언을 줄이는 방법

- [ ] 부모 컴포넌트에서는 프롭스 설정 + 커스텀 이벤트 리스닝 설정을 한다. `@updateEvent="name= $event.target.value"`
- [ ] 자식 컴포넌트에서는 프롭스 설정 + 커스템 이벤트 트리거만 설정한다. `@input="$emit('event-name', $event)"`



**방법 3** : 이벤트 리스닝을 하지 않아도 되는 방법

- [ ] 부모 컴포넌트에서는 `v-model:"name"` 만 설정
- [ ] 자식 컴포넌트에서는 `value`로 프롭스 설정 + 커스텀 이벤트 트리거 설정(event name은 input, 전달하는 값은 value)

```vue
<template>
	<div>
        <input type="text" :value="value" @input="$emit('input', $event.target.value)" style="padding: 30px; border: 2px solid green">
    </div>
</template>

<script>
	export default {
        props: {
            value: {
                type:String,
                required:true
            }
        }
    }
</script>
```



### 18강

부모 컴포넌트에서 슬롯 안에 어떤 코드를 넣으면 자식 컴포넌트에서 코드가 삽입된다.

- [ ] 부모 컴포넌트에서는 `#slotName` 의 template를 생성하면 된다.
- [ ] 자식 컴포넌트에서는 `name="slotName"` 의 slot을 생성한다.
- [ ] 부모 컴포넌트에서 자식 객체의 데이터를 이용해서 문제를 해결 할 수 있다.

```vue
<template>
	<childCompnent>
    	<template #default="{hello}">
			{{hello}}
		</template>
    </childCompnent>
</template>
```



```vue
<template>
	<slot name="default" :hello="hello"></slot>
</template>

<script>
	export default {
        data () {
            return {
                hello : "hello"
            }
        }
    }
</script>
```



### 19강

뷰 인스턴스의 라이프 사이클

create, mount, update, destroy 총 4개의 이벤트가 있고 이 이벤트들 마다 메소드가 호출 된다. 이를 메소드에 어떤 콜백 함수를 작성해서 컨트롤 할 수 있다.

```vue
<script>
	export default {
        beforeCreate() {
            console.log("before create", this.name);
          },

          created() {
            console.log("created", this.name);
          },

          beforeMount() {
            alert("beforeMount");
          },

          mounted() {
            alert("mount");
          },

          beforeUpdate() {
            alert("beforeUpdate");
          },

          updated() {
            alert("updated");
          },

          beforeDestroy() {
            alert("beforeDestroy");
          },

          destroyed() {
            alert("destroyed");
          }
    }
</script>
```



