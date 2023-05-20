import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import videoReducer from './videoSlice';
import { persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    versoion: 1,
    storage,

}

const rootReducer = combineReducers({user: userReducer, video: videoReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
})
});

export const persistor = persistStore(store);

