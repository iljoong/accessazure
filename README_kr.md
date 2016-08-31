# OAuth 2.0 Sample for Accessing Azure Management API

본 샘플은 OAuth 2.0 인증 방법으로 Azure mangement API를 접근하는 구현 방법을 소개합니다.

## OAuth 2.0 grant type

Azure AD를 통해 access token을 획득하는 OAuth 2.0의 다양한 방법이 존재합니다.

간략히게, 아래와 같은 경우에 해당 OAuth 방법을 선택하세요.

* `Client grant` : 사용자 인증이 필요 없는 자동화된 백앤드 서비스를 개발할 경우

* `Code grant`: 사용자 인증을 필요하고, 서버 사이드 웹앱을 개발할 경우

* `Implicit grant`: 사용자 인증이 필요하고, 클라이언트 사이드 또는 SPA (Single Page Application) 웹앱을 개발할 경우

자세한 내용은 다음의 URL을 참조하세요. http://alexbilbie.com/guide-to-oauth-2-grants/ 

![OAuth 2.0](http://alexbilbie.com/images/oauth-grants.svg)

## How to setup

본 샘플을 사용하기 위해서는 다음의 스텝을 수행하여 Azure AD를 설정해야 합니다.

1. 새로운 Azure AD 애플리케이션 생성

2. Azure AD 구성

    OAuth grant를 위해 아래의 설정값이 필요합니다.
    
    * `tenant id`
    * `client id`
    * `client secret`
    * `redirect url`
    * `resource`

    본 샘플에서 `redirect url`은 'http://localhost:3000/auth/callback'을 사용했습니다.

3. 해당 리소스에 (Azure service managment) 접근 권한 추가

자세한 설정 방법은 다음을 참고하세요. [https://azure.microsoft.com/en-us/documentation/articles/resource-group-create-service-principal-portal/](https://azure.microsoft.com/en-us/documentation/articles/resource-group-create-service-principal-portal/)

참고로 *Implicit grant*를 사용할 경우, Azure AD에 추가 설정을 해야 합니다.

자세한 내용은 다음을 참고하세요. [https://azure.microsoft.com/en-us/documentation/articles/active-directory-dev-understanding-oauth2-implicit-grant/](https://azure.microsoft.com/en-us/documentation/articles/active-directory-dev-understanding-oauth2-implicit-grant/)

## How to run samples

* [Client grant sample](/Clientgrant/README.md)

* [Code grant sample](/Codegrant/README.md)

* [Implict grant sample](/Implicitgrant/README.md)

## Terms & Conditions

* MIT License