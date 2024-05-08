
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

    const [createProcessingopen, setCreateProcessingOpen] = useState(false);
    const [updateProcessingopen, setUpdateProcessingOpen] = useState(false);
    const condition = true; 

    const [entity, setEntity] = useState("");

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/processings/${name}`;
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

    function fetchProcessing(name){
        axios.get(`/processings/${name}`)
        .then(response => {
            setBoardDetail(response.data);
        })
    }

    function deleteList(){
        axios.delete(`/processings/${name}`)
        navigate('/process1/processings');
    }

    function createProcessing(){

        axios.put(`/processings/${name}/createprocessing`, {name: entity }) 
        .then(response => {
            const resp = response.data
            if(!resp){
                navigate({pathname: URL.ERROR}, {state: {msg: resp.resultMessage}});
            }else{
                setCreateProcessingOpen(false);
                fetchProcessing(name);
            }
        });
    }
    function updateProcessing(){

        axios.put(`/processings/${name}//process`, {name: entity }) 
        .then(response => {
            const resp = response.data
            if(!resp){
                navigate({pathname: URL.ERROR}, {state: {msg: resp.resultMessage}});
            }else{
                setUpdateProcessingOpen(false);
                fetchProcessing(name);
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
                        <li><Link to="/process1/processings">처리</Link></li>
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
                            <h1 className="tit_1">처리</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{name}</div>
                                <div className="info">
                                    <dl>
                                        <dt>처리</dt>
                                        <dd>{name}</dd>
                                    </dl>
                                    <dl>
                                        <dt>일자</dt>
                                        <dd>{boardDetail && boardDetail.date }</dd>
                                    </dl>
                                    <dl>
                                        <dt>민원번호</dt>
                                        <dd>{boardDetail && boardDetail.민원번호 }</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setCreateProcessingOpen(true);
                                            }
                                        }}>
                                            처리 생성
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setUpdateProcessingOpen(true);
                                            }
                                        }}>
                                            처리 수정
                                        </button>
                                    </div>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px"}}>
                                    <Link to="/process1/processings"
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
                            <Dialog open={createProcessingopen} onClose={() => setCreateProcessingOpen(false)}>
                                <DialogTitle>처리 생성</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="namedate"
                                        label="NameDate"
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setCreateProcessingOpen(false)} className="btn btn_blue_h46 w_100">
                                        취소
                                    </button>
                                    <button onClick={createProcessing} className="btn btn_blue_h46 w_100">
                                    처리 생성
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={updateProcessingopen} onClose={() => setUpdateProcessingOpen(false)}>
                                <DialogTitle>처리 수정</DialogTitle>
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
                                    <button onClick={() => setUpdateProcessingOpen(false)} className="btn btn_blue_h46 w_100">
                                        취소
                                    </button>
                                    <button onClick={updateProcessing} className="btn btn_blue_h46 w_100">
                                    처리 수정
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
