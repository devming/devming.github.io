## 개념
- Entity
	- 컨테이너 객체
	- Entity를 렌더링하고 동작을 작동시키려면 Component가 있어야한다.
	- 모든 Entity에는 `Transform` Component가 존재한다.
	- 그러나 모든 Entity에 `Model` Component가 있진 않다.
	- 엔티티는 하위 엔티티를 포함할 수도 있다. ![[Pasted image 20231010201116.png]]
- Component
	- 각 Component는 Entity에 대한 특정 동작을 활성화 시킨다.
	- 이렇게 생긴 `Model`(컴포넌트)은 USDZ파일이고 RealityKit에 로드 된다.![[Pasted image 20231010200135.png]]
	- `Transform` 컴포넌트는 Entity를 변형할 수 있다. (scale, position, orientation)
## RealityView 
### 개념
- RealityView는 SwiftUI 좌표 공간과 RealityKit의 좌표 공간을 맵핑하는 기능이 있다.
- 

### 샘플 코드
```swift
RealityView { content, attachments in 
	// load entities and add attachments
} update: { content, attachments in 
	// update your RealityKit entities
	// 여기서 의존하고 있는 값이 변경될 때만 실행된다.
} attachments: {
	// SwiftUI Views
}
```
![[Pasted image 20231010201733.png]]

## RealityView Gesture
- RealityView에서 Entity는 SwiftUI의 View 처럼 이벤트를 입력받을 수 있다. 
- 이 때, 아래의 사진처럼 `Input Target` Component와 `Collision` Component가 있어야하는데, 이게 없는 Entity는 이벤트가 무시된다.![[Pasted image 20231010202606.png]]
- RealityView에 `gesture` modifier를 통해 Gesture를 추가할 수 있다.![[Pasted image 20231010204012.png]]

## Animation
- RealityView에 3가지 애니메이션이 방식이 존재한다. 
	- From-to-by, Orbit, Sampled ![[Pasted image 20231010204216.png]]

## Audio
- RealityView에 3가지 오디오 방식이 존재한다.
	- Spatial, Ambient, Channel![[Pasted image 20231010204430.png]]
### Spatial
- 실제 공간처럼 소리가 난다. 방향지향성 속성도 있어서 특정 방향으로 소리를 낼 수도 있다.
![[Pasted image 20231010204624.png]]

### Ambient
- 주변 환경에서 고정적으로 소리가 난다.
![[Pasted image 20231010204605.png]]

### Channel
- 공간감 없는 사운드
- 시각적인 것과 무관한 BGM
![[Pasted image 20231010204756.png]]


## System
- 시스템의 코드는 정기적으로 실행되고 Component의 현재 상태에 따라 동작한다. ![[Pasted image 20231010205334.png]]


## Reference
- https://developer.apple.com/videos/play/wwdc2023/10081/
- https://developer.apple.com/videos/play/wwdc2023/10080/
