- Custom Script는 프로젝트 repository에 저장되는 쉘스크립트이다.
- 3가지 타입을 사용할 수 있다. 
	- post-clone
	- pre-xcodebuild
	- post-xcodebuild
![[Pasted image 20231017084855.png]] 
- Workflow에서 사용중인 프로젝트 파일과 동일한 수준에 `ci_scripts` 폴더를 추가하고 여기에 해당 스크립트 파일을 저장합니다.![[Pasted image 20231017085615.png]]
- 앱 아이콘 변경 샘플 코드
```sh
#!/bin/sh

if [[ -n $CI_PULL_REQUEST_NUMBER && $CI_XCODEBUILD_ACTION == 'archive']]
then
	echo "Setting Fruta Beta App Icon"
	APP_ICON_PATH=$CI_WORKSPACE/Shared/Assets.xcassets/AppIcon.appiconset

	# Remove existing App Icon
	rm -rf $APP_ICON_PATH

	# Replace with Fruta Beta App Icon
	mv "$CI_WORKSPACE/ci_scripts/AppIcon-Beta.appiconset" $APP_ICON_PATH
	
fi
```

### 주의사항
- 스크립트의 표준 출력 및 표준 오류는 실행된 작업에 대한 로그에 포함되고 artifact 탭에서 다운로드할 수 있다.
- 스크립트가 예상대로 실행되지 않는 것 같으면 이름을 올바르게 지정했는지, 프로젝트 또는 workspace에 `ci_scripts` 폴더에 올바르게 배치했는지 확인하자.
- 스크립트 오류 발견 및 해결을 위해서 로킹을 잘 할 것.
- Xcode Cloud는 스크립트의 종료 코드를 respect한다. 스크립트가 0이 아닌 값으로 종료되면 Xcode Cloud는 이를 실패로 간주하고 전체 작업이 실패하게 된다. Xcode Cloud가 나머지 작업을 계속 하기 전에, 이를 활용해서 스크립트에서 실행해야하는 명령이 성공하는지를 확인하자.
- 테스트 작업에서는 테스트를 빌드하고 실행하는데 여러 환경이 사용된다는 점을 유의하자.
	- 테스트 빌드에 사용되는 환경에만 소스코드가 복제된다.
	- 테스트를 실행하는 환경에는 소스코드가 복제되지 않는다.
	- post-clone script는 테스트를 실행할 때는 실행되지 않고 Custom Script와 기타 쉘 스크립트 및 small tools와 같은 dependency는 ci_scripts 폴더 내에 완전히 포함되어야 한다.