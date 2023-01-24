const LogoIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.539a.498.498 0 0 1-.686.166c-1.878-1.148-4.243-1.408-7.028-.772a.499.499 0 0 1-.222-.972c3.048-.696 5.662-.396 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.322-5.428-1.705-7.972-.932a.624.624 0 1 1-.362-1.194c2.905-.882 6.517-.455 8.987 1.063a.624.624 0 0 1 .205.858zm.084-2.269C10.153 5.561 5.9 5.42 3.438 6.167a.748.748 0 1 1-.434-1.432c2.826-.857 7.523-.692 10.492 1.07a.748.748 0 0 1-.764 1.287z" />
        </svg>
    )
}
const HomeIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z" />
        </svg>
    )
}

const HomeActiveIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"/>
        </svg>
    )
}
const SearchIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
        </svg>
    )
}

const SearchActiveIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"/>
            <path fill="currentColor" d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"/>
        </svg>
    )
}
const CollectionIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"/>
        </svg>
    )
}

const CollectionActiveIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"/>
        </svg>
    )
}
const PlusIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"/>
        </svg>
    )
}
const HeartFilledIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"/>
        </svg>
    )
}
const DownloadIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"/>
            <path fill="currentColor" d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"/>
        </svg>
    )
}
const PrevIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"/>
        </svg>
    )
}
const NextIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"/>
        </svg>
    )
}
const DefaultUserIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"/>
        </svg>
    )
}
const DownDirIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M14 6l-6 6-6-6h12z"/>
        </svg>
    )
}
const ExternalIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"/>
            <path fill="currentColor" d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"/>
        </svg>
    )
}
const PlayIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/>
        </svg>
    )
}
const PlayerPlayIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"/>
        </svg>
    )
}
const PauseIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"/>
        </svg>
    )
}
const PlayerPrevIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"/>
        </svg>
    )
}
const PlayerNextIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"/>
        </svg>
    )
}
const ShuffleIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"/>
            <path fill="currentColor" d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"/>
        </svg>
    )
}
const LoopIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"/>
        </svg>
    )
}
const LyricsIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"/>
        </svg>
    )
}
const QueueIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"/>
        </svg>
    )
}
const DeviceIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"/>
            <path fill="currentColor" d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"/>
        </svg>
    )
}
const VolumeMuteIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"/>
            <path fill="currentColor" d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"/>
        </svg>
    )
}
const VolumeLowIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/>
        </svg>
    )
}
const VolumeNormalIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"/>
        </svg>
    )
}
const VolumeFullIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/>
            <path fill="currentColor" d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"/>
        </svg>
    )
}
const FullScreenIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M6.53 9.47a.75.75 0 010 1.06l-2.72 2.72h1.018a.75.75 0 010 1.5H1.25v-3.579a.75.75 0 011.5 0v1.018l2.72-2.72a.75.75 0 011.06 0zm2.94-2.94a.75.75 0 010-1.06l2.72-2.72h-1.018a.75.75 0 110-1.5h3.578v3.579a.75.75 0 01-1.5 0V3.81l-2.72 2.72a.75.75 0 01-1.06 0z"/>
        </svg>
    )
}
const FullScreenOffIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21.707 2.293a1 1 0 010 1.414L17.414 8h1.829a1 1 0 010 2H14V4.757a1 1 0 112 0v1.829l4.293-4.293a1 1 0 011.414 0zM2.293 21.707a1 1 0 010-1.414L6.586 16H4.757a1 1 0 010-2H10v5.243a1 1 0 01-2 0v-1.829l-4.293 4.293a1 1 0 01-1.414 0z"/>
        </svg>
    )
}
const HeartIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"/>
        </svg>
    )
}
const ArrowLeftIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor" d="M.47 11.03a.75.75 0 001.06 0L8 4.56l6.47 6.47a.75.75 0 101.06-1.06L8 2.44.47 9.97a.75.75 0 000 1.06z"/>
        </svg>
    )
}
const PictureInPictureIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16">
            <g fill="currentColor" fillRule="evenodd">
                <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="nonzero"/>
                <path d="M10 8h4v3h-4z"/>
            </g>
        </svg>
    )
}

const PodcastsIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 1024 1024">
            <path d="M319.261 652.453q23.15 27.685 55.388 48.318l-27.685 32.22q-34.233-22.651-59.907-52.853-52.355-60.926-66.459-138.693t12.086-152.28 87.092-126.364q11.587-10.069 27.187-20.137l27.685 32.22q-16.122 10.584-27.187 20.137-52.355 44.804-74.759 108.476t-10.321 130.147 56.89 118.808zM865.98 185.789q60.422 70.994 88.843 158.315t20.904 179.986q-5.034 61.924-25.172 119.312t-54.621 107.725-81.809 90.629q-11.587 9.565-26.688 20.652l-27.685-32.22q15.103-10.584 27.187-20.652 63.923-55.388 101.944-129.632t44.804-158.83-19.119-164.116-80.812-143.979q-31.722-36.756-74.003-67.456l27.685-32.22q44.804 32.719 78.522 72.489zM190.382 762.714q31.722 36.756 74.003 67.456l-27.685 32.22q-44.3-32.719-78.522-72.489-60.422-70.994-88.843-158.315t-21.156-180.238 49.072-174.689 112.758-142.711q11.587-9.565 26.688-20.652l27.685 32.22q-15.103 10.584-27.187 20.652-64.942 55.892-102.691 132.145t-44.037 156.317 18.867 161.351 81.062 146.748zM512.061 360.97q52.355 0 89.61 37.254t37.254 89.61q0 46.823-30.206 82.058t-75.525 42.786v298.026h-42.288v-298.026q-29.702-5.034-53.854-22.651t-38.001-44.552-13.832-57.638q0-52.355 37.254-89.61t89.61-37.254zM512.061 572.408q35.241 0 59.907-24.92t24.668-59.655-24.92-59.655-59.655-24.92-59.655 24.92-24.92 59.655q0 23.15 11.338 42.537t30.721 30.721 42.537 11.338zM737.104 295.533q52.355 60.926 66.459 138.693t-12.086 152.28-87.092 126.364q-11.587 10.069-27.187 20.652l-27.685-32.719q16.122-10.584 27.187-20.137 52.355-44.3 74.759-108.224t10.321-130.399-56.89-118.808q-23.15-27.685-55.388-48.318l27.685-32.22q33.718 22.651 59.907 52.853z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
    )
}
const ArtistsIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.363 10.474l-.521.625a2.499 2.499 0 00.67 3.766l.285.164a5.998 5.998 0 011.288-1.565l-.573-.33a.5.5 0 01-.134-.754l.52-.624a7.372 7.372 0 001.837-4.355 7.221 7.221 0 00-.29-2.489 5.644 5.644 0 00-3.116-3.424A5.771 5.771 0 006.753 2.87a5.7 5.7 0 00-1.19 2.047 7.22 7.22 0 00-.29 2.49 7.373 7.373 0 001.838 4.355l.518.622a.5.5 0 01-.134.753L3.5 15.444a5 5 0 00-2.5 4.33v2.231h13.54a5.981 5.981 0 01-1.19-2H3v-.23a3 3 0 011.5-2.6l3.995-2.308a2.5 2.5 0 00.67-3.766l-.521-.625a5.146 5.146 0 01-1.188-4.918 3.71 3.71 0 01.769-1.334 3.769 3.769 0 015.556 0c.346.386.608.84.768 1.334.157.562.22 1.146.187 1.728a5.379 5.379 0 01-1.373 3.188zm7.641-1.173a1 1 0 00-1 1v4.666h-1a3 3 0 103 3v-7.666a.999.999 0 00-1.003-1h.003zm-1 8.666a1 1 0 11-1-1h1v1z"></path>
        </svg>
    )
}
const AlbumIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 52 52">
            <path fill="currentColor" d="M26 0.00100708C11.641 0.00100708 0 11.642 0 26.001C0 40.36 11.641 52.001 26 52.001C40.36 52 52 40.36 52 26C52 11.64 40.36 0.00100708 26 0.00100708ZM26 50C12.767 50 2 39.234 2 26C2 12.766 12.767 2.00001 26 2.00001C39.234 2.00001 50 12.766 50 26C50 39.234 39.234 50 26 50ZM26 18C21.582 18 18 21.582 18 26C18 30.418 21.582 34 26 34C30.418 34 34 30.418 34 26C34 21.582 30.419 18 26 18ZM26 32C22.692 32 20 29.309 20 26C20 22.691 22.692 20 26 20C29.308 20 32 22.691 32 26C32 29.309 29.309 32 26 32Z"></path>
        </svg>
    )
}
const timeIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16" >
            <path fill="currentColor" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z">
            </path>
            <path fill="currentColor" d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z">
            </path>
        </svg>
    )
}
const moreIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" >
            <path fill="currentColor" d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
    )
}
const crossIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon"><path fill="currentColor" d="M1.47 1.47a.75.75 0 011.06 0L8 6.94l5.47-5.47a.75.75 0 111.06 1.06L9.06 8l5.47 5.47a.75.75 0 11-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 01-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 010-1.06z"></path>
        </svg>
    )
}
const editIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
           <path fill="currentColor" d="M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z"></path>
        </svg>
    )
}
const noteIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
           <path fill="currentColor" d="M6 3h15v15.167a3.5 3.5 0 11-3.5-3.5H19V5H8v13.167a3.5 3.5 0 11-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 101.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"></path>
        </svg>
    )
}
const cloudUploadIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 48 48" data-encore-id="icon">
           <path fill="currentColor" d="M12.5 40q-4.3 0-7.4-3.1Q2 33.8 2 29.5q0-3.9 2.475-6.875t6.375-3.575q1-4.85 4.7-7.925T24.1 8.05q5.65 0 9.475 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40H25.5q-1.2 0-2.1-.9-.9-.9-.9-2.1V24.1l-4.15 4.15-2.15-2.15 7.8-7.8 7.8 7.8-2.15 2.15-4.15-4.15V37h12.05q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.45-3.025-7.65t-7.475-3.2q-4.45 0-7.5 3.2t-3.05 7.65h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.1 2.2 5.325T12.5 37h7v3ZM24 25.5Z"></path>
        </svg>
    )
}
const settingsIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
           <path fill="currentColor" d="M23.2 11.362l-1.628-.605a.924.924 0 01-.52-.7.88.88 0 01.18-.805l1.2-1.25a1 1 0 00.172-1.145 12.075 12.075 0 00-3.084-3.865 1 1 0 00-1.154-.086l-1.35.814a.982.982 0 01-.931-.02 1.01 1.01 0 01-.59-.713l-.206-1.574a1 1 0 00-.787-.848 12.15 12.15 0 00-4.945 0 1 1 0 00-.785.848l-.2 1.524a1.054 1.054 0 01-.62.747 1.024 1.024 0 01-.968.02l-1.318-.795a1 1 0 00-1.152.086 12.118 12.118 0 00-3.085 3.867 1 1 0 00.174 1.143l1.174 1.218a.91.91 0 01.182.828.949.949 0 01-.532.714l-1.618.6a1 1 0 00-.653.955 12.133 12.133 0 001.1 4.822 1 1 0 001 .578l1.935-.183a.83.83 0 01.654.327.794.794 0 01.188.726l-.6 1.822a1 1 0 00.34 1.106c.66.504 1.369.94 2.117 1.3.748.36 1.532.642 2.338.841a.988.988 0 00.715-.09 1 1 0 00.362-.332l1.136-1.736a.81.81 0 011.16.022l1.124 1.714a1 1 0 001.077.422c1.617-.4 3.133-1.13 4.454-2.145a1 1 0 00.341-1.106l-.613-1.859a.771.771 0 01.18-.7.78.78 0 01.635-.317l1.945.183a.994.994 0 001-.578 12.133 12.133 0 001.1-4.822 1 1 0 00-.643-.953zm-1.6 2.977c-.103.448-.237.888-.4 1.318l-1.213-.115a2.851 2.851 0 00-2.9 3.637l.383 1.16a10.09 10.09 0 01-2.473 1.191l-.72-1.1a2.691 2.691 0 00-2.275-1.18 2.637 2.637 0 00-2.232 1.16l-.735 1.12a10.117 10.117 0 01-2.471-1.19l.37-1.125a2.879 2.879 0 00-2.93-3.669l-1.2.113a10.46 10.46 0 01-.4-1.317 10.09 10.09 0 01-.214-1.358l.93-.345a3.032 3.032 0 001.095-4.8L3.55 7.15a10.158 10.158 0 011.71-2.146l.688.415a3 3 0 002.875.066 3.022 3.022 0 001.726-2.283l.105-.8a10.174 10.174 0 012.745 0l.11.844a3.099 3.099 0 004.542 2.184l.721-.435a10.22 10.22 0 011.712 2.146l-.694.72a3.005 3.005 0 001.084 4.768l.942.35c-.042.457-.113.912-.215 1.36H21.6zM12 7.001a5 5 0 105 5 5.006 5.006 0 00-4.993-5H12zm0 8a3 3 0 11.007 0H12z"></path>
        </svg>
    )
}

const Icon = ({name, size = 24}) => {
    const icons = {
        home: HomeIcon,
        homeActive: HomeActiveIcon,
        search: SearchIcon,
        searchActive: SearchActiveIcon,
        collection: CollectionIcon,
        collectionActive: CollectionActiveIcon,
        plus: PlusIcon,
        heart: HeartIcon,
        heartFilled: HeartFilledIcon,
        download: DownloadIcon,
        prev: PrevIcon,
        next: NextIcon,
        defaultUser: DefaultUserIcon,
        downDir: DownDirIcon,
        external: ExternalIcon,
        play: PlayIcon,
        playerPlay: PlayerPlayIcon,
        pause: PauseIcon,
        playerPrev: PlayerPrevIcon,
        playerNext: PlayerNextIcon,
        loop: LoopIcon,
        shuffle: ShuffleIcon,
        queue: QueueIcon,
        fullScreen: FullScreenIcon,
        fullScreenOff: FullScreenOffIcon,
        pictureInPicture: PictureInPictureIcon,
        device: DeviceIcon,
        volumeMuted: VolumeMuteIcon,
        volumeLow: VolumeLowIcon,
        volumeNormal: VolumeNormalIcon,
        volumeFull: VolumeFullIcon,
        lyrics: LyricsIcon,
        arrowLeft: ArrowLeftIcon,
        logo: LogoIcon,
        podcasts: PodcastsIcon,
        artists: ArtistsIcon,
        album: AlbumIcon,
        time: timeIcon,
        more: moreIcon,
        cross: crossIcon,
        edit: editIcon,
        note: noteIcon,
        cloudUpload: cloudUploadIcon,
        settings: settingsIcon
    }

    const Component = icons[name]
    return <Component size={size} />
}

export {
    Icon
}