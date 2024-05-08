
import { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import axios from 'axios';

import * as EgovNet from 'api/egovFetch'
import { NOTICE_BBS_ID } from 'config'
import CODE from 'constants/code'
import URL from 'constants/url'

import EgovAttachFile from 'components/EgovAttachFile'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'

function EgovNoticeDetail(props) {
    console.group("EgovNoticeDetail");
    console.log("EgovNoticeDetail [props] : ", props);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovNoticeDetail [location] : ", location);

    // const bbsId = location.state.bbsId || NOTICE_BBS_ID;
    const name = location.state.name;
    const searchCondition = location.state.searchCondition;

    const [createInvestigationopen, setCreateInvestigationOpen] = useState(false);
    const [updateInvestigationopen, setUpdateInvestigationOpen] = useState(false);
    const condition = true; 

    const [entity, setEntity] = useState("");

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/investigations/${name}`;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
        EgovNet.requestFetch(retrieveDetailURL,
            requestOptions,
            function (resp) {
                setBoardDetail(resp);
            }
        );
    }
    useEffect(function () {
        retrieveDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchInvestigation(name){
        axios.get(`/investigations/${name}`)
        .then(response => {
            setBoardDetail(response.data);
        })
    }

    function deleteList(){
        axios.delete(`/investigations/${name}`)
        navigate('/process1/investigations');
    }

    function createInvestigation(){

        axios.put(`/investigations/${name}/createinvestigation`, {name: entity }) 
        .then(response => {
            const resp = response.data
            if(!resp){
                navigate({pathname: URL.ERROR}, {state: {msg: resp.resultMessage}});
            }else{
                setCreateInvestigationOpen(false);
                fetchInvestigation(name);
            }
        });
    }
    function updateInvestigation(){

        axios.put(`/investigations/${name}/update`, {name: entity }) 
        .then(response => {
            const resp = response.data
            if(!resp){
                navigate({pathname: URL.ERROR}, {state: {msg: resp.resultMessage}});
            }else{
                setUpdateInvestigationOpen(false);
                fetchInvestigation(name);
            }
        });
    }


    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to="/process1/investigations">사실조사</Link></li>
                        <li>{masterBoard && masterBoard.bbsNm}</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_VIEW" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">사실조사</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{name}</div>
                                <div className="info">
                                    <dl>
                                        <dt>사실조사</dt>
                                        <dd>{name}</dd>
                                    </dl>
                                    <dl>
                                        <dt>설명</dt>
                                        <dd>{boardDetail && boardDetail.description }</dd>
                                    </dl>
                                    <dl>
                                        <dt>일자</dt>
                                        <dd>{boardDetail && boardDetail.date }</dd>
                                    </dl>
                                    <dl>
                                        <dt>민원번호</dt>
                                        <dd>{boardDetail && boardDetail.민원번호 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Status</dt>
                                        <dd>{boardDetail && boardDetail.status }</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setCreateInvestigationOpen(true);
                                            }
                                        }}>
                                            사실조사 생성
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setUpdateInvestigationOpen(true);
                                            }
                                        }}>
                                            사실조사 판정
                                        </button>
                                    </div>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px"}}>
                                    <Link to="/process1/investigations"
                                        className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px", marginRight: "9%"}}>
                                    <button
                                        onClick={deleteList}
                                        className="btn btn_blue_h46 w_100">삭제
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 게시판 상세보기 --> */}
                        <div>
                            <Dialog open={createInvestigationopen} onClose={() => setCreateInvestigationOpen(false)}>
                                <DialogTitle>사실조사 생성</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="namedescriptiondate"
                                        label="NameDescriptionDate"
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setCreateInvestigationOpen(false)} className="btn btn_blue_h46 w_100">
                                        취소
                                    </button>
                                    <button onClick={createInvestigation} className="btn btn_blue_h46 w_100">
                                    사실조사 생성
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={updateInvestigationopen} onClose={() => setUpdateInvestigationOpen(false)}>
                                <DialogTitle>사실조사 판정</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id=""
                                        label=""
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setUpdateInvestigationOpen(false)} className="btn btn_blue_h46 w_100">
                                        취소
                                    </button>
                                    <button onClick={updateInvestigation} className="btn btn_blue_h46 w_100">
                                    사실조사 판정
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EgovNoticeDetail;
