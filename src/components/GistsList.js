import React from 'react'
import '../App.css';
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {removeGists} from '../store/gists/actions/removeGists';
import {getFetch} from "../store/gists/actions/getFetch";
export default function GistsList() {
    const loading = useSelector(state => state.gistsReducer.loading);
    const gists = useSelector(state => state.gistsReducer.gists);
    const error = useSelector(state => state.gistsReducer.error);
    const dispatch = useDispatch();
    const getFetchArticles = async () => {
        dispatch(getFetch());
    }
    const deleteGists = () => {
        dispatch(removeGists);
    }
        return (
            <>
                <div className="gists">
                    <h1>Articles Page</h1>
                    {loading && <CircularProgress/>}
                    <button
                        type="button"
                        onClick={getFetchArticles}
                        className="btn btn-secondary"
                    >
                        Get data from api
                    </button>
                    <button
                        type="button"
                        onClick={deleteGists}
                        className="btn btn-secondary"
                    >
                        Clear
                    </button>
                    {gists && (
                        <ul>
                            {gists.map((gist) => (
                                <li key={gist.id}>{gist.title}</li>
                            ))}
                        </ul>
                    )}
                    {error && <p style={{color: 'red'}}>{error.message}</p>}
                </div>
            </>
        )
}
