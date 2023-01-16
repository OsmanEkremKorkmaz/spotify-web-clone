import CollectionLayout from "views/Collection";
import Albums from "views/Collection/Albums";
import Artists from "views/Collection/Artists";
import Playlists from "views/Collection/Playlists";
import Podcasts from "views/Collection/Podcasts";
import Home from "views/Home";
import SearchMain from "views/Search/SearchMain";
import SearchLayout from "views/Search";
import MainLayout from "views/Main";
import SearchContentLayout from "views/Search/SearchContent/index";
import SearchContentAll from "views/Search/SearchContent/SearchContentAll";
import Playlist from "views/Playlist";
import Register from "views/auth/Register";
import AuthLayout from "views/auth";
import Login from "views/auth/Login";
import Profile from "views/Profile";
import PrivateRoute from "components/PrivateRoute";
import AddSong from "views/AddSong";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/search",
                element: <SearchLayout />,
                children: [
                    {
                        index:true,
                        element: <SearchMain />
                    },
                    {
                        path:":search",
                        element: <SearchContentLayout />,
                        children: [
                            {
                                index:true,
                                element: <SearchContentAll />
                            },
                            {
                                path:"tracks",
                                element: <SearchContentAll />
                            }
                        ]
                    }
                ]
            },
            {
                path: "/collection",
                element: <CollectionLayout />,
                auth:true,
                children: [
                    {
                        path: "tracks",
                        element: <Playlist />
                    },
                    {
                        path: "playlists",
                        element: <Playlists />
                    },
                    {
                        path: "podcasts",
                        element: <Podcasts />
                    },
                    {
                        path: "artists",
                        element: <Artists />
                    },
                    {
                        path: "albums",
                        element: <Albums />
                    }
                ]
            },
            {
                path: "/playlist/:id",
                element: <Playlist />
            },
            {
                path: "/user/:user_id",
                element: <Profile />
            },
            {
                path: "/add",
                element:<AddSong />,
                auth: true
            }

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    },

]

const authCheck = (routes) => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes);