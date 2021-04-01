[유튜브강의](https://www.youtube.com/watch?v=bxxZmYUpg6M)

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

