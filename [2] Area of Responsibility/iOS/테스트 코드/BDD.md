# BDD란?
## 정의
- BDD는 Behavior Driven Development의 약자로 유닛 테스트 코드를 작성할 때, 시나리오 기반으로 테스트 케이스를 작성하는 방법론이다.
- 아래의 흐름대로 3가지로 구성하여 구현한다.
>1. Given
>2. When
>3. Then 

## 샘플 코드
```swift
func test_이름이_devming으로_초기화_발생시_나이를_나타내는_상태값에_값이_할당된다() {
    // Given
    let name = "devming"
    // When 
    let result = sut.setAgeInit(with: name)
    // Then
    XCTAssertEqual(result, 3)
}
```