import { useCallback, useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import CODE from 'constants/code';
import URL from 'constants/url';


import ApplicationList from 'pages/application/ApplicationList';
import ApplicationDetail from 'pages/application/ApplicationDetail';
import ApplicationEdit from 'pages/application/ApplicationEdit';
import InvestigationList from 'pages/process1/InvestigationList';
import InvestigationDetail from 'pages/process1/InvestigationDetail';
import InvestigationEdit from 'pages/process1/InvestigationEdit';
import ProcessingList from 'pages/process1/ProcessingList';
import ProcessingDetail from 'pages/process1/ProcessingDetail';
import ProcessingEdit from 'pages/process1/ProcessingEdit';
import Analysis1List from 'pages/analysis1/Analysis1List';
import Analysis1Detail from 'pages/analysis1/Analysis1Detail';
import Analysis1Edit from 'pages/analysis1/Analysis1Edit';


//COMMON
import EgovError from 'components/EgovError';
import EgovFooter from 'components/EgovFooter';
import EgovHeader from 'components/EgovHeader';
import EgovInfoPopup from 'components/EgovInfoPopup';

import EgovLogin from 'pages/login/EgovLogin';
import EgovMain from 'pages/main/EgovMain';

//ABOUT
import EgovAboutHistory from 'pages/about/EgovAboutHistory';
import EgovAboutLocation from 'pages/about/EgovAboutLocation';
import EgovAboutOrganization from 'pages/about/EgovAboutOrganization';
import EgovAboutSite from 'pages/about/EgovAboutSite';

//INTRO
import EgovIntroService from 'pages/intro/EgovIntroService';
import EgovIntroWork from 'pages/intro/EgovIntroWork';

//SUPPORT
import EgovSupportApply from 'pages/support/apply/EgovSupportApply';
import EgovSupportDownloadCreate from 'pages/support/download/EgovDownloadCreate';
import EgovSupportDownloadDetail from 'pages/support/download/EgovDownloadDetail';
import EgovSupportDownloadList from 'pages/support/download/EgovDownloadList';
import EgovSupportQnaDetail from 'pages/support/qna/EgovQnaDetail';
import EgovSupportQnaList from 'pages/support/qna/EgovQnaList';

//INFORM
import EgovDailyDetail from 'pages/inform/daily/EgovDailyDetail';
import EgovDailyList from 'pages/inform/daily/EgovDailyList';
import EgovWeeklyList from 'pages/inform/weekly/EgovWeeklyList';

import EgovNoticeDetail from 'pages/inform/notice/EgovNoticeDetail';
import EgovNoticeEdit from 'pages/inform/notice/EgovNoticeEdit';
import EgovNoticeList from 'pages/inform/notice/EgovNoticeList';

import EgovGalleryDetail from 'pages/inform/gallery/EgovGalleryDetail';
import EgovGalleryEdit from 'pages/inform/gallery/EgovGalleryEdit';
import EgovGalleryList from 'pages/inform/gallery/EgovGalleryList';

//ADMIN
import EgovAdminScheduleDetail from 'pages/admin/schedule/EgovAdminScheduleDetail';
import EgovAdminScheduleEdit from 'pages/admin/schedule/EgovAdminScheduleEdit';
import EgovAdminScheduleList from 'pages/admin/schedule/EgovAdminScheduleList';

import EgovAdminBoardEdit from 'pages/admin/board/EgovAdminBoardEdit';
import EgovAdminBoardList from 'pages/admin/board/EgovAdminBoardList';

import EgovAdminUsageEdit from 'pages/admin/usage/EgovAdminUsageEdit';
import EgovAdminUsageList from 'pages/admin/usage/EgovAdminUsageList';

import EgovAdminNoticeDetail from 'pages/admin/notice/EgovAdminNoticeDetail';
import EgovAdminNoticeEdit from 'pages/admin/notice/EgovAdminNoticeEdit';
import EgovAdminNoticeList from 'pages/admin/notice/EgovAdminNoticeList';

import EgovAdminGalleryDetail from 'pages/admin/gallery/EgovAdminGalleryDetail';
import EgovAdminGalleryEdit from 'pages/admin/gallery/EgovAdminGalleryEdit';
import EgovAdminGalleryList from 'pages/admin/gallery/EgovAdminGalleryList';
//사이트관리자 암호 바꾸기 기능 추가 2023.04.15(토) 김일국 추가
import * as EgovNet from 'api/egovFetch'; // jwt토큰 위조 검사 때문에 추가
import initPage from 'js/ui';
import EgovAdminPasswordUpdate from 'pages/admin/manager/EgovAdminPasswordUpdate';

const RootRoutes = () => {
  //useLocation객체를 이용하여 정규표현식을 사용한 /admin/~ 으로 시작하는 경로와 비교에 사용(아래 1줄) */}
  const location = useLocation();

  //리액트에서 사이트관리자에 접근하는 토큰값 위변조 방지용으로 서버에서 비교하는 함수 추가
  const jwtAuthentication = useCallback(() => {
    console.group("jwtAuthentication");

    const jwtAuthURL = "/jwtAuthAPI";
    let requestOptions = {
      method: "POST",
    };

    EgovNet.requestFetch(jwtAuthURL, requestOptions, (resp) => {
      if (resp === false) {
        setMounted(false);
      } else {
        setMounted(true); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
      }
    });

    console.groupEnd("jwtAuthentication");
  }, []);

  //시스템관리 메뉴인 /admin/으로 시작하는 URL은 모두 로그인이 필요하도록 코드추가(아래)
  const isMounted = useRef(false); // 아래 로그인 이동 부분이 2번 실행되지 않도록 즉, 마운트 될 때만 실행되도록 변수 생성
  const [mounted, setMounted] = useState(false);// 컴포넌트 최초 마운트 후 리렌더링 전 로그인 페이지로 이동하는 조건으로 사용

  useEffect(() => {
	if (!isMounted.current) { // 컴포넌트 최초 마운트 시 페이지 진입 전(렌더링 전) 실행
		isMounted.current = true; // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
		setMounted(true); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
		const regex = /^(\/admin\/)+(.)*$/; //정규표현식 사용: /admin/~ 으로 시작하는 경로 모두 포함
		if(regex.test(location.pathname)) {
			setMounted(false); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용. 기본은 숨기기
			jwtAuthentication(); // 이 함수에서 관리자단 인증여부 확인 후 렌더링 처리
		}
	}
  },[jwtAuthentication, location, mounted]); // location 경로와 페이지 마운트상태가 변경 될 때 업데이트 후 리렌더링

  if(mounted) { // 인증 없이 시스템관리 URL로 접근할 때 렌더링 되는 것을 방지하는 조건추가. 
	  return (
	      <Routes>
	        <Route path={URL.ERROR} element={<EgovError />} />
	        <Route path="*" element={<SecondRoutes/>} />
	      </Routes>
	  )
  }
}

const SecondRoutes = () => {
  // eslint-disable-next-line no-unused-vars
  const [loginVO, setLoginVO] = useState({});

  //useRef객체를 사용하여 페이지 마운트 된 후 ui.js를 로딩 하도록 변경 코드 추가(아래)
  const isMounted = useRef(false); // 아래 로그인 이동 부분이 2번 실행되지 않도록 즉, 마운트 될 때만 실행되도록 변수 생성
  useEffect(() => {
    if (!isMounted.current) { // 컴포넌트 최초 마운트 시 페이지 진입 전(렌더링 전) 실행
		isMounted.current = true; // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
	}else{
		initPage();
	}
  },[]);
  
  return (
    <>
      <EgovHeader />
      <Routes>
          <Route path="/application/applications" element={<ApplicationList />} />
          <Route path="/application/ApplicationEdit" element={<ApplicationEdit />} />
          <Route path="/application/ApplicationDetail" element={<ApplicationDetail />} />

          <Route path="/process1/investigations" element={<InvestigationList />} />
          <Route path="/process1/InvestigationEdit" element={<InvestigationEdit />} />
          <Route path="/process1/InvestigationDetail" element={<InvestigationDetail />} />

          <Route path="/process1/processings" element={<ProcessingList />} />
          <Route path="/process1/ProcessingEdit" element={<ProcessingEdit />} />
          <Route path="/process1/ProcessingDetail" element={<ProcessingDetail />} />

          <Route path="/analysis1/analysis1s" element={<Analysis1List />} />
          <Route path="/analysis1/Analysis1Edit" element={<Analysis1Edit />} />
          <Route path="/analysis1/Analysis1Detail" element={<Analysis1Detail />} />


          <Route path={URL.MAIN} element={<EgovMain />} />


        {/* MAIN */}
        <Route path={URL.MAIN} element={<EgovMain />} />

        {/* LOGIN */}
        <Route path={URL.LOGIN} element={<EgovLogin
                onChangeLogin={(user) => setLoginVO(user)}
              />}/>

        {/* ERROR */}
        <Route path={URL.ERROR} element={<EgovError />} />

        {/* ABOUT */}
        <Route path={URL.ABOUT} element={<Navigate to={URL.ABOUT_SITE} />} />
        <Route path={URL.ABOUT_SITE} element={<EgovAboutSite />} />
        <Route path={URL.ABOUT_HISTORY} element={<EgovAboutHistory />} />
        <Route path={URL.ABOUT_ORGANIZATION} element={<EgovAboutOrganization />} />
        <Route path={URL.ABOUT_LOCATION} element={<EgovAboutLocation />} />

        {/* INTRO */}
        <Route path={URL.INTRO} element={<Navigate to={URL.INTRO_WORKS} />} />
        <Route path={URL.INTRO_WORKS} element={<EgovIntroWork />} />
        <Route path={URL.INTRO_SERVICE} element={<EgovIntroService />} />

        {/* SUPPORT */}
        <Route path={URL.SUPPORT} element={<Navigate to={URL.SUPPORT_DOWNLOAD} />} />

        <Route path={URL.SUPPORT_DOWNLOAD} element={<EgovSupportDownloadList />} />
        <Route path={URL.SUPPORT_DOWNLOAD_DETAIL} element={<EgovSupportDownloadDetail />} />
        <Route path={URL.SUPPORT_DOWNLOAD_CREATE} element={<EgovSupportDownloadCreate />} />

        <Route path={URL.SUPPORT_QNA} element={<EgovSupportQnaList />} />
        <Route path={URL.SUPPORT_QNA_DETAIL} element={<EgovSupportQnaDetail />} />

        <Route path={URL.SUPPORT_APPLY} element={<EgovSupportApply />} />

        {/* INFORM */}
        <Route path={URL.INFORM} element={<Navigate to={URL.INFORM_DAILY} />} />

        <Route path={URL.INFORM_DAILY} element={<EgovDailyList />} />
        <Route path={URL.INFORM_DAILY_DETAIL} element={<EgovDailyDetail />} />
        <Route path={URL.INFORM_WEEKLY} element={<EgovWeeklyList />} />
        <Route path={URL.INFORM_WEEKLY_DETAIL} element={<EgovDailyDetail />} />

        <Route path={URL.INFORM_NOTICE} element={<EgovNoticeList />} />
        <Route path={URL.INFORM_NOTICE_DETAIL} element={<EgovNoticeDetail />} />
        <Route path={URL.INFORM_NOTICE_CREATE} element={<EgovNoticeEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.INFORM_NOTICE_MODIFY} element={<EgovNoticeEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.INFORM_NOTICE_REPLY} element={<EgovNoticeEdit mode={CODE.MODE_REPLY} />} />

        <Route path={URL.INFORM_GALLERY} element={<EgovGalleryList />} />
        <Route path={URL.INFORM_GALLERY_DETAIL} element={<EgovGalleryDetail />} />
        <Route path={URL.INFORM_GALLERY_CREATE} element={<EgovGalleryEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.INFORM_GALLERY_MODIFY} element={<EgovGalleryEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.INFORM_GALLERY_REPLY} element={<EgovGalleryEdit mode={CODE.MODE_REPLY} />} />

        {/* ADMIN */}
        <Route path={URL.ADMIN} element={<Navigate to={URL.ADMIN_SCHEDULE} />} />
        <Route path={URL.ADMIN_SCHEDULE} element={<EgovAdminScheduleList />} />
        <Route path={URL.ADMIN_SCHEDULE_DETAIL} element={<EgovAdminScheduleDetail />} />
        <Route path={URL.ADMIN_SCHEDULE_CREATE} element={<EgovAdminScheduleEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_SCHEDULE_MODIFY} element={<EgovAdminScheduleEdit mode={CODE.MODE_MODIFY} />} />

        <Route path={URL.ADMIN_BOARD} element={<EgovAdminBoardList />} />
        <Route path={URL.ADMIN_BOARD_CREATE} element={<EgovAdminBoardEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_BOARD_MODIFY} element={<EgovAdminBoardEdit mode={CODE.MODE_MODIFY} />} />

        <Route path={URL.ADMIN_USAGE} element={<EgovAdminUsageList />} />
        <Route path={URL.ADMIN_USAGE_CREATE} element={<EgovAdminUsageEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_USAGE_MODIFY} element={<EgovAdminUsageEdit mode={CODE.MODE_MODIFY} />} />

        <Route path={URL.ADMIN_NOTICE} element={<EgovAdminNoticeList />} />
        <Route path={URL.ADMIN_NOTICE_DETAIL} element={<EgovAdminNoticeDetail />} />
        <Route path={URL.ADMIN_NOTICE_CREATE} element={<EgovAdminNoticeEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_NOTICE_MODIFY} element={<EgovAdminNoticeEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.ADMIN_NOTICE_REPLY} element={<EgovAdminNoticeEdit mode={CODE.MODE_REPLY} />} />

        <Route path={URL.ADMIN_GALLERY} element={<EgovAdminGalleryList />} />
        <Route path={URL.ADMIN_GALLERY_DETAIL} element={<EgovAdminGalleryDetail />} />
        <Route path={URL.ADMIN_GALLERY_CREATE} element={<EgovAdminGalleryEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_GALLERY_MODIFY} element={<EgovAdminGalleryEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.ADMIN_GALLERY_REPLY} element={<EgovAdminGalleryEdit mode={CODE.MODE_REPLY} />} />
		{/* 사이트관리자 암호 바꾸기 기능 */}
		<Route path={URL.ADMIN_MANAGER} element={<EgovAdminPasswordUpdate />} />
      </Routes>
      <EgovFooter />
      <EgovInfoPopup />
      
    </>
  )
  
}


export default RootRoutes;