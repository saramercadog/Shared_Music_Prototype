import { useState, type ReactNode } from 'react'

type IconName =
  | 'arrow'
  | 'bolt'
  | 'chevron'
  | 'clock'
  | 'close'
  | 'dislike'
  | 'discover'
  | 'globe'
  | 'heart'
  | 'home'
  | 'like'
  | 'more'
  | 'pause'
  | 'play'
  | 'plus'
  | 'search'
  | 'settings'
  | 'share'
  | 'skip'
  | 'sparkles'
  | 'users'
  | 'volume'

function Icon({ name, size = 18, className = '' }: { name: IconName; size?: number; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    bolt: <path d="M13 2 4.5 13H11l-1 9 8.5-12H12l1-8Z" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <path d="m7 7 10 10M17 7 7 17" />,
    dislike: <path d="M17 14H6.8A2.8 2.8 0 0 1 4 11.2V6h13l3 6-3 2Zm0 0v5a2 2 0 0 1-2 2l-3-7" />,
    discover: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9Z" /></>,
    heart: <path d="M20.8 9.2c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.8 2.4Z" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    like: <path d="M7 10h10.2a2.8 2.8 0 0 1 2.8 2.8V18H7l-3-6 3-2Zm0 0V5a2 2 0 0 1 2-2l3 7" />,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" /></>,
    pause: <><path d="M9 7v10M15 7v10" /></>,
    play: <path d="m9 7 8 5-8 5V7Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></>,
    settings: <><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>,
    share: <><circle cx="18" cy="5" r="2" /><circle cx="6" cy="12" r="2" /><circle cx="18" cy="19" r="2" /><path d="m8 11 8-5M8 13l8 5" /></>,
    skip: <><path d="m6 7 7 5-7 5V7ZM14 7l7 5-7 5V7Z" /></>,
    sparkles: <><path d="m12 2 1.3 4.7L18 8l-4.7 1.3L12 14l-1.3-4.7L6 8l4.7-1.3L12 2Z" /><path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" /></>,
    users: <><path d="M16 20v-1.5A3.5 3.5 0 0 0 12.5 15h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="8" r="3" /><path d="M16 5.2a3 3 0 0 1 0 5.6M18 15a3.5 3.5 0 0 1 3 3.5V20" /></>,
    volume: <><path d="M5 10v4h4l5 4V6l-5 4H5Z" /><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11" /></>,
  }
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const spaces = [
  { name: 'The Aux Cord', icon: 'users' as IconName, color: '#f26f43', count: 5 },
  { name: 'Late Night Listeners', icon: 'sparkles' as IconName, color: '#8f75e7', count: 4 },
  { name: 'Indie Explorers', icon: 'heart' as IconName, color: '#56a19c', count: 7 },
  { name: 'Study Buddies', icon: 'discover' as IconName, color: '#d7aa47', count: 3 },
]

const tracks = [
  {
    title: 'Faded Polaroids',
    artist: 'Mira Sol',
    album: 'Soft Focus',
    source: 'Added by Jamie',
    sourceType: 'friend',
    duration: '3:42',
    image: 'https://images.unsplash.com/photo-1760925897293-feeaf8165324?auto=format&fit=crop&w=360&q=85',
    color: '#ff8f6b',
  },
  {
    title: 'Weightless',
    artist: 'Teo North',
    album: 'Open Rooms',
    source: 'Added by Noor',
    sourceType: 'friend',
    duration: '4:08',
    image: 'https://images.unsplash.com/photo-1779878603870-dad73869e4dc?auto=format&fit=crop&w=360&q=85',
    color: '#ba87ff',
  },
  {
    title: 'Slow Orbit',
    artist: 'Paper Satellites',
    album: 'Night Index',
    source: 'For your space',
    sourceType: 'match',
    duration: '3:18',
    image: 'https://images.unsplash.com/photo-1793123999733-785bafd53a74?auto=format&fit=crop&w=360&q=85',
    color: '#52aeb3',
  },
  {
    title: 'Honeylight',
    artist: 'Luna Vale',
    album: 'Sunday Weather',
    source: 'Added by Priya',
    sourceType: 'friend',
    duration: '3:55',
    image: 'https://images.unsplash.com/photo-1781820960065-6a9fb24e66ca?auto=format&fit=crop&w=360&q=85',
    color: '#d5a84e',
  },
]

// Metadata for songs contributed by members of each space.
// Filters only affect songs already in the selected community playlist.
type SongFeedback = 'like' | 'dislike'
const songMetadata = [
  { genre: 'Indie', mood: 'Dreamy', popularity: 19, minutes: 3.7 },
  { genre: 'Ambient', mood: 'Focused', popularity: 28, minutes: 4.1 },
  { genre: 'Electronic', mood: 'Relaxed', popularity: 34, minutes: 3.3 },
  { genre: 'Pop', mood: 'Happy', popularity: 71, minutes: 3.9 },
]
function filterCommunitySongs(songIds: number[], preferences: PlaylistPreferences, feedback: Record<number, SongFeedback>) {
  const candidates = songIds.filter(id => {
    const song = songMetadata[id]
    return song && feedback[id] !== 'dislike' &&
      (preferences.genre === 'Any genre' || song.genre === preferences.genre) &&
      (preferences.mood === 'Any mood' || song.mood === preferences.mood)
  })
  // Popularity is a soft ranking preference, not a source of extra songs.
  candidates.sort((a,b) => (feedback[b] === 'like' ? 1000 : 0) + (100 - Math.abs(songMetadata[b].popularity - preferences.popularity)) -
    ((feedback[a] === 'like' ? 1000 : 0) + (100 - Math.abs(songMetadata[a].popularity - preferences.popularity))))
  let total = 0
  return candidates.filter(id => {
    if (total + songMetadata[id].minutes > preferences.length && total > 0) return false
    total += songMetadata[id].minutes
    return true
  })
}

const publicSpaces = [
  {
    name: 'After Hours',
    description: 'Late-night electronic, leftfield pop, and neon-lit finds.',
    contributors: '12.8k',
    active: 486,
    image: 'https://images.unsplash.com/photo-1781820959848-81680d7200f9?auto=format&fit=crop&w=720&q=85',
    color: '#7c68a2',
  },
  {
    name: 'Global Groove',
    description: 'Dance-floor discoveries contributed from every timezone.',
    contributors: '9.4k',
    active: 312,
    image: 'https://images.unsplash.com/photo-1773983240131-b26cfc6b9634?auto=format&fit=crop&w=720&q=85',
    color: '#d1684f',
  },
  {
    name: 'Quiet Mornings',
    description: 'Soft acoustic, jazz, and ambient music for slow starts.',
    contributors: '7.1k',
    active: 204,
    image: 'https://images.unsplash.com/photo-1660832830372-ffe2cca4dbf6?auto=format&fit=crop&w=720&q=85',
    color: '#4b827d',
  },
]

type PlaylistPreferences = { genre: string; mood: string; length: number; popularity: number }
type Playlist = { id: number; title: string; description: string; songs: number[]; creator: string; preferences?: PlaylistPreferences }
const defaultPreferences: PlaylistPreferences = { genre: 'Any genre', mood: 'Any mood', length: 30, popularity: 50 }

type ChatMessage = { id: number; author: string; text: string; playlistId?: number; kind?: 'request' | 'playlist' }
const initialPlaylists: Record<string, Playlist[]> = {
  'The Aux Cord': [
    { id: 1, title: 'Gym Hype', description: 'Fast, loud, and energetic', songs: [0, 2], creator: 'Jamie' },
    { id: 2, title: 'Sunday Reset', description: 'Soft songs for slow mornings', songs: [1, 3], creator: 'Noor' },
  ],
  'Late Night Listeners': [{ id: 3, title: 'After Midnight', description: 'For long night walks', songs: [1, 2], creator: 'Priya' }],
  'Indie Explorers': [{ id: 4, title: 'Hidden Gems', description: 'Lesser-known favorites', songs: [0, 3], creator: 'Jamie' }],
  'Study Buddies': [{ id: 5, title: 'Focus Mode', description: 'Uninterrupted study sessions', songs: [1, 2], creator: 'Noor' }],
}
const initialMessages: Record<string, ChatMessage[]> = {
  'The Aux Cord': [
    { id: 1, author: 'Jamie', text: 'Added some high-energy songs for our workouts!', playlistId: 1, kind: 'playlist' },
    { id: 2, author: 'Noor', text: 'Made a chill playlist for the weekend ☀️', playlistId: 2, kind: 'playlist' },
    { id: 3, author: 'Priya', text: 'Anyone have lesser-known indie rock recommendations?' },
  ],
  'Late Night Listeners': [{ id: 4, author: 'Priya', text: 'Here is my late-night mix!', playlistId: 3, kind: 'playlist' }],
  'Indie Explorers': [{ id: 5, author: 'Jamie', text: 'Sharing some underrated finds.', playlistId: 4, kind: 'playlist' }],
  'Study Buddies': [{ id: 6, author: 'Noor', text: 'Try this while studying!', playlistId: 5, kind: 'playlist' }],
}

function App() {
  const [activePage, setActivePage] = useState<'home' | 'saved' | 'group'>('home')
  const [activeSpace, setActiveSpace] = useState('The Aux Cord')
  const [playing, setPlaying] = useState(true)
  const [activeTrack, setActiveTrack] = useState(0)
  const [saved, setSaved] = useState<number[]>([1, 3])
  const [joinedPublic, setJoinedPublic] = useState<string[]>([])
  const [playlists, setPlaylists] = useState(initialPlaylists)
  const [messages, setMessages] = useState(initialMessages)
  const [requestOpen, setRequestOpen] = useState(false)
  const [requestText, setRequestText] = useState('')
  const [requestMood, setRequestMood] = useState('Any mood')
  const [requestDiscovery, setRequestDiscovery] = useState('Balanced')
  const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(null)
  const [fineTuneOpen, setFineTuneOpen] = useState(true)
  const [songFeedback, setSongFeedback] = useState<Record<number, Record<number, SongFeedback>>>({})
  const [newGroupOpen, setNewGroupOpen] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')
  const [customGroups, setCustomGroups] = useState<typeof spaces>([])
  const allGroups = [...spaces, ...customGroups]
  const groupPlaylists = playlists[activeSpace] || []
  const groupMessages = messages[activeSpace] || []
  const openedPlaylist = groupPlaylists.find(p => p.id === selectedPlaylist)
  const currentPreferences = openedPlaylist?.preferences ?? defaultPreferences
  const currentFeedback = openedPlaylist ? (songFeedback[openedPlaylist.id] ?? {}) : {}
  const visibleCommunitySongs = openedPlaylist ? filterCommunitySongs(openedPlaylist.songs, currentPreferences, currentFeedback) : []
  const setFeedback = (trackId: number, value: SongFeedback) => {
    if (!openedPlaylist) return
    setSongFeedback(prev => {
      const previous = prev[openedPlaylist.id] ?? {}
      const next = { ...previous }
      if (next[trackId] === value) delete next[trackId]
      else next[trackId] = value
      return { ...prev, [openedPlaylist.id]: next }
    })
  }
  const updatePlaylistPreferences = (changes: Partial<PlaylistPreferences>) => {
    if (!openedPlaylist) return
    setPlaylists(prev => ({ ...prev, [activeSpace]: (prev[activeSpace] || []).map(p => p.id === openedPlaylist.id ? { ...p, preferences: { ...(p.preferences ?? defaultPreferences), ...changes } } : p) }))
  }
  const current = tracks[activeTrack]
  const enterGroup = (name: string) => { setActiveSpace(name); setActivePage('group'); setSelectedPlaylist(null) }
  const postMessage = (message: ChatMessage) => setMessages(prev => ({ ...prev, [activeSpace]: [...(prev[activeSpace] || []), message] }))
  const makeRequest = () => {
    if (!requestText.trim()) return
    const id = Date.now()
    const playlist: Playlist = { id, title: requestText.trim().length > 42 ? requestText.trim().slice(0, 42) + '…' : requestText.trim(), description: `${requestMood} · ${requestDiscovery} discovery`, songs: [], creator: 'You', preferences: { ...defaultPreferences, mood: requestMood } }
    setPlaylists(prev => ({ ...prev, [activeSpace]: [...(prev[activeSpace] || []), playlist] }))
    setRequestText(''); setRequestOpen(false); setSelectedPlaylist(id)
  }
  const addSuggestion = (playlistId: number, trackIndex: number) => {
    setPlaylists(prev => ({ ...prev, [activeSpace]: (prev[activeSpace] || []).map(p => p.id === playlistId && !p.songs.includes(trackIndex) ? { ...p, songs: [...p.songs, trackIndex] } : p) }))
  }
  const createGroup = () => {
    const name = newGroupName.trim()
    if (!name || allGroups.some(g => g.name.toLowerCase() === name.toLowerCase())) return
    setCustomGroups(prev => [...prev, { name, icon: 'users', color: '#8f75e7', count: 1 }])
    setNewGroupName(''); setNewGroupOpen(false); enterGroup(name)
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>together.fm</span>
        </div>

        <nav className="primary-nav" aria-label="Primary navigation">
          <button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}><Icon name="home" /> Home</button>
          <button className={activePage === 'saved' ? 'active' : ''} onClick={() => setActivePage('saved')}><Icon name="heart" /> Saved <span className="nav-count">{saved.length}</span></button>
        </nav>

        <div className="spaces-heading">
          <span>Your music groups</span>
          <button aria-label="Create a new group" onClick={() => setNewGroupOpen(true)}><Icon name="plus" size={16} /></button>
        </div>
        <div className="space-list">
          {allGroups.map((space) => (
            <button
              key={space.name}
              className={activeSpace === space.name ? 'space active' : 'space'}
              onClick={() => enterGroup(space.name)}
            >
              <span className="space-icon" style={{ '--space-color': space.color } as React.CSSProperties}><Icon name={space.icon} size={17} /></span>
              <span>{space.name}</span>
              <span className="space-count">{space.count}</span>
            </button>
          ))}
        </div>

        <button className="new-space" onClick={() => setNewGroupOpen(true)}><Icon name="users" size={17} /> Create a group <Icon name="arrow" size={14} /></button>
        <div className="sidebar-profile">
          <div className="avatar">A</div>
          <div><strong>Alex Morgan</strong><span>View profile</span></div>
          <Icon name="more" size={18} />
        </div>
      </aside>

      <main>
        <header className="topbar">
          <div className="mobile-brand">together.fm</div>
          <label className="search">
            <Icon name="search" size={18} />
            <input aria-label="Search music" placeholder={activePage === 'saved' ? 'Search your saved songs' : 'Search songs, artists, or spaces'} />
            <kbd>⌘ K</kbd>
          </label>
          <div className="friends-online">
            <div className="mini-avatars"><span>J</span><span>N</span><span>P</span></div>
            <span>3 friends listening</span>
          </div>
          <button className="icon-button" aria-label="Settings"><Icon name="settings" /></button>
        </header>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}><Icon name="home" size={16} /> Home</button>
          <button className={activePage === 'saved' ? 'active' : ''} onClick={() => setActivePage('saved')}><Icon name="heart" size={16} /> Saved</button>
        </nav>

        {activePage === 'home' && (
          <div className="page-scroll">
            <section className="home-page">
              <div className="home-hero">
                <div className="hero-copy">
                  <span className="eyebrow"><Icon name="sparkles" size={14} /> Shared listening, tuned to you</span>
                  <h1>Music starts with a conversation.</h1>
                  <p>Ask for recommendations, collect suggestions, and build playlists together.</p>
                  <button className="primary-cta" onClick={() => { setActiveTrack(0); setPlaying(true) }}>Play today’s mix <Icon name="play" size={16} /></button>
                </div>
                <div className="hero-collage" aria-hidden="true">
                  <img src={tracks[0].image} alt="" />
                  <img src={tracks[1].image} alt="" />
                  <img src={tracks[2].image} alt="" />
                  <span className="hero-pulse"><Icon name="play" size={18} /></span>
                </div>
              </div>

              <div className="section-heading">
                <div><span className="eyebrow">Your music groups</span><h2>Requests that become playlists</h2></div>
                <button onClick={() => { setActiveTrack(0); setPlaying(true) }}>Play all <Icon name="play" size={14} /></button>
              </div>
              <div className="home-spaces">
                {spaces.map((space, index) => (
                  <button key={space.name} className="home-space-card" onClick={() => enterGroup(space.name)}>
                    <div className="card-art" style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, #161411cc), url(${tracks[index].image})` }}>
                      <span className="space-icon" style={{ '--space-color': space.color } as React.CSSProperties}><Icon name={space.icon} size={17} /></span>
                      <div className="card-members"><span>J</span><span>N</span><span>+{index + 2}</span></div>
                    </div>
                    <div className="card-copy"><div><strong>{space.name}</strong><span>{space.count} members · Multiple playlists</span></div><Icon name="arrow" size={16} /></div>
                  </button>
                ))}
              </div>

              <div className="section-heading public-heading">
                <div><span className="eyebrow"><Icon name="globe" size={13} /> Open to everyone</span><h2>Discover with the wider community</h2><p>Public spaces are shaped by thousands of listeners—not just people you know.</p></div>
                <button>Browse public spaces <Icon name="arrow" size={14} /></button>
              </div>
              <div className="public-spaces">
                {publicSpaces.map((space, index) => {
                  const joined = joinedPublic.includes(space.name)
                  return (
                    <article className="public-card" key={space.name}>
                      <div className="public-cover" style={{ backgroundImage: `linear-gradient(180deg, transparent 25%, #11100ed9), url(${space.image})` }}>
                        <span className="public-badge"><i /> Public space</span>
                        <button className="public-play" aria-label={`Preview ${space.name}`} onClick={() => { setActiveTrack(index + 1); setPlaying(true) }}><Icon name="play" size={16} /></button>
                        <div><h3>{space.name}</h3><span><strong>{space.active}</strong> listening now</span></div>
                      </div>
                      <div className="public-copy">
                        <p>{space.description}</p>
                        <div className="public-meta">
                          <span><Icon name="users" size={14} /> {space.contributors} contributors</span>
                          <button
                            className={joined ? 'joined' : ''}
                            onClick={() => setJoinedPublic(joined ? joinedPublic.filter((item) => item !== space.name) : [...joinedPublic, space.name])}
                          >{joined ? 'Joined' : 'Join space'}{!joined && <Icon name="plus" size={13} />}</button>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="home-lower">
                <section className="activity-panel">
                  <div className="panel-heading"><div><span className="eyebrow">Friend activity</span><h3>Fresh from your circle</h3></div><div className="live-dot">Live</div></div>
                  {tracks.slice(0, 3).map((track, index) => (
                    <button className="activity-row" key={track.title} onClick={() => { setActiveTrack(index); setPlaying(true) }}>
                      <img src={track.image} alt="" />
                      <span className="activity-main"><strong>{track.title}</strong><small>{track.artist}</small></span>
                      <span className="activity-source">{track.source}</span>
                      <span className="activity-play"><Icon name="play" size={14} /></span>
                    </button>
                  ))}
                </section>
                <aside className="daily-card">
                  <div className="daily-icon"><Icon name="sparkles" /></div>
                  <span className="eyebrow">Today’s spark</span>
                  <h3>A little stranger, in a good way.</h3>
                  <p>Your friends added 6 lesser-known tracks across your spaces today.</p>
                  <button onClick={() => { enterGroup('Indie Explorers') }}>Play rare gems <Icon name="play" size={14} /></button>
                </aside>
              </div>
            </section>
          </div>
        )}


        {activePage === 'group' && (
          <div className="page-scroll"><section className="group-page request-dashboard">
            <div className="group-header">
              <div><span className="eyebrow"><Icon name="users" size={14}/> Shared music group · {allGroups.find(g => g.name === activeSpace)?.count || 1} members</span><h1>{activeSpace}</h1><p>A home for your group's music requests and collaborative playlists.</p></div>
              <button className="primary-cta" onClick={() => setRequestOpen(true)}><Icon name="plus" size={17}/> New playlist request</button>
            </div>
            <div className="dashboard-summary">
              <div><span className="eyebrow">All requests</span><strong>{groupPlaylists.length}</strong><small>Playlists created together</small></div>
              <div><span className="eyebrow">Open requests</span><strong>{groupPlaylists.filter(p => p.songs.length === 0).length}</strong><small>Waiting for suggestions</small></div>
              <div><span className="eyebrow">Songs shared</span><strong>{groupPlaylists.reduce((total,p) => total + p.songs.length,0)}</strong><small>Across all playlists</small></div>
            </div>
            <div className="dashboard-section-heading"><div><span className="eyebrow">Community board</span><h2>Playlist requests</h2><p>Pick a request to explore its playlist or suggest a song.</p></div></div>
            {groupPlaylists.length > 0 ? <div className="request-grid">
              {[...groupPlaylists].reverse().map(p => <button type="button" className={'request-card ' + (selectedPlaylist === p.id ? 'selected' : '')} key={p.id} onClick={() => { setSelectedPlaylist(p.id); setFineTuneOpen(true) }}>
                <div className="request-card-top"><span className="request-card-symbol"><Icon name="discover" size={21}/></span><span className={'request-status ' + (p.songs.length ? 'active' : 'waiting')}>{p.songs.length ? 'Playlist started' : 'Needs recommendations'}</span></div>
                <h3>{p.title}</h3><p>{p.description}</p>
                <div className="request-card-footer"><span>Requested by {p.creator}</span><span>{p.songs.length} {p.songs.length === 1 ? 'song' : 'songs'}</span></div>
                <span className="request-card-action">{p.songs.length ? 'View playlist & contribute' : 'Suggest the first song'} <Icon name="arrow" size={15}/></span>
              </button>)}
            </div> : <div className="dashboard-empty"><Icon name="discover" size={30}/><h3>No playlist requests yet</h3><p>Ask your group for recommendations and start the first shared playlist.</p><button className="primary-cta" onClick={() => setRequestOpen(true)}>Create a request</button></div>}
            {openedPlaylist && <section className="playlist-detail" id="request-detail">
              <div className="playlist-detail-heading"><div><span className="eyebrow">Playlist request · by {openedPlaylist.creator}</span><h2>{openedPlaylist.title}</h2><p>{openedPlaylist.description}</p></div><button onClick={() => setSelectedPlaylist(null)} aria-label="Close playlist"><Icon name="close"/></button></div>
              <section className="playlist-tuning" aria-label="Filter community playlist">
                <div className="playlist-tuning-heading">
                  <div><span className="eyebrow"><Icon name="settings" size={14}/> Community playlist filters</span><h3>Find your kind of music</h3><p>Filter songs your friends already added. Your settings never remove anyone's contributions from the shared playlist.</p></div>
                  <button type="button" className="tuning-toggle" onClick={() => setFineTuneOpen(v => !v)} aria-expanded={fineTuneOpen}>{fineTuneOpen ? 'Hide filters' : 'Filter songs'} <Icon name="settings" size={16}/></button>
                </div>
                {fineTuneOpen && <div className="playlist-tuning-controls">
                  <label>Genre<select value={currentPreferences.genre} onChange={e => updatePlaylistPreferences({ genre: e.target.value })}>{['Any genre', 'Indie', 'Pop', 'Rock', 'Electronic', 'Hip-hop', 'R&B', 'Jazz', 'Classical', 'Ambient'].map(x => <option key={x}>{x}</option>)}</select></label>
                  <label>Mood<select value={currentPreferences.mood} onChange={e => updatePlaylistPreferences({ mood: e.target.value })}>{['Any mood', 'Energetic', 'Relaxed', 'Focused', 'Happy', 'Melancholic', 'Dreamy', 'Romantic'].map(x => <option key={x}>{x}</option>)}</select></label>
                  <label>Listening time<select value={currentPreferences.length} onChange={e => updatePlaylistPreferences({ length: Number(e.target.value) })}>{[15, 30, 45, 60, 90, 120].map(x => <option key={x} value={x}>{x} minutes</option>)}</select></label>
                  <div className="tuning-popularity"><div className="tuning-popularity-label"><label htmlFor="playlist-popularity">Prioritize by popularity</label><strong>{currentPreferences.popularity < 35 ? 'Hidden gems first' : currentPreferences.popularity > 65 ? 'Popular songs first' : 'Balanced'}</strong></div><input id="playlist-popularity" type="range" min="0" max="100" step="5" value={currentPreferences.popularity} onChange={e => updatePlaylistPreferences({ popularity: Number(e.target.value) })}/><div className="tuning-range-labels"><span>Hidden gems</span><span>Popular hits</span></div></div>
                  <div className="tuning-summary"><Icon name="users" size={18}/><span><strong>Only community contributions</strong><small>{currentPreferences.genre} · {currentPreferences.mood} · up to {currentPreferences.length} min · {visibleCommunitySongs.length} of {openedPlaylist.songs.length} songs visible</small></span><button type="button" onClick={() => updatePlaylistPreferences(defaultPreferences)}>Reset filters</button></div>
                </div>}
              </section>
              <section className="live-recommendations" aria-live="polite" aria-label="Filtered community contributions">
                <div className="live-recs-heading"><div><span className="eyebrow"><Icon name="users" size={14}/> Added by your community</span><h3>Community contributions</h3><p>These songs were shared by people in this space. Filter, like, dislike or save them. Disliked songs are hidden from your view, not deleted from the playlist.</p></div><span className="live-count">{visibleCommunitySongs.length} / {openedPlaylist.songs.length} shown</span></div>
                {visibleCommunitySongs.length ? <div className="live-song-list">{visibleCommunitySongs.map(id => {const track = tracks[id]; const meta = songMetadata[id]; return <div className="live-song" key={id}>
                  <img src={track.image} alt=""/><div className="live-song-info"><strong>{track.title}</strong><small>{track.artist} · {meta.genre} · {meta.mood}</small><span>{track.source} · {meta.popularity < 35 ? 'Hidden gem' : meta.popularity > 65 ? 'Popular pick' : 'Rising track'} · {track.duration}</span></div>
                  <div className="live-song-actions"><button type="button" className={currentFeedback[id] === 'like' ? 'feedback-active like-active' : ''} aria-label={'Like ' + track.title} aria-pressed={currentFeedback[id] === 'like'} onClick={() => setFeedback(id,'like')}><Icon name="like" size={17}/> Like</button><button type="button" className={currentFeedback[id] === 'dislike' ? 'feedback-active dislike-active' : ''} aria-label={'Dislike ' + track.title} aria-pressed={currentFeedback[id] === 'dislike'} onClick={() => setFeedback(id,'dislike')}><Icon name="dislike" size={17}/> Dislike</button><button type="button" className={saved.includes(id) ? 'saved-active' : ''} aria-label={(saved.includes(id) ? 'Remove saved ' : 'Save ') + track.title} aria-pressed={saved.includes(id)} onClick={() => setSaved(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev,id])}><Icon name="heart" size={17}/> {saved.includes(id) ? 'Saved' : 'Save'}</button><button type="button" onClick={() => {setActiveTrack(id);setPlaying(true)}}><Icon name="play" size={17}/> Preview</button></div>
                </div>})}</div> : <div className="live-no-matches"><Icon name="discover" size={23}/><strong>No community songs match these filters</strong><p>Try another mood or genre, increase listening time, or clear your dislikes. Your friends' songs are still in the playlist.</p><button type="button" onClick={() => {updatePlaylistPreferences(defaultPreferences); if(openedPlaylist) setSongFeedback(prev => ({...prev,[openedPlaylist.id]:{}}))}}>Show all community songs</button></div>}
                <div className="live-recs-foot"><span>Showing {visibleCommunitySongs.length} of {openedPlaylist.songs.length} contributed songs · No automatically generated tracks</span><button type="button" onClick={() => { if(openedPlaylist) setSongFeedback(prev => ({ ...prev, [openedPlaylist.id]: {} })) }}>Clear likes & dislikes</button></div>
              </section>
              <h3>Recommend a song</h3><div className="suggestion-list">{tracks.filter((_,i) => !openedPlaylist.songs.includes(i)).map(t => {const i = tracks.indexOf(t); return <button key={t.title} onClick={() => addSuggestion(openedPlaylist.id, i)}><Icon name="plus" size={15}/>{t.title} — {t.artist}</button>})}</div>
            </section>}
          </section></div>
        )}
        {requestOpen && <div className="modal-backdrop" onClick={() => setRequestOpen(false)}><form className="request-modal" onClick={e => e.stopPropagation()} onSubmit={e => {e.preventDefault(); makeRequest()}}>
          <div className="modal-heading"><div><span className="eyebrow">Ask your group</span><h2>Request a playlist</h2></div><button type="button" onClick={() => setRequestOpen(false)} aria-label="Close"><Icon name="close"/></button></div>
          <p>Describe what you want to hear. Your request will appear on the group dashboard as a playlist that friends can contribute to.</p>
          <label>What kind of music do you want?<textarea autoFocus required value={requestText} onChange={e => setRequestText(e.target.value)} placeholder="e.g. Lesser-known indie rock for a rainy study session" rows={3}/></label>
          <label>Mood<select value={requestMood} onChange={e => setRequestMood(e.target.value)}><option>Any mood</option><option>Energetic</option><option>Relaxed</option><option>Focused</option><option>Melancholic</option></select></label>
          <label>Discovery preference<select value={requestDiscovery} onChange={e => setRequestDiscovery(e.target.value)}><option>Balanced</option><option>Lesser-known</option><option>Familiar favorites</option></select></label>
          <button className="primary-cta" type="submit" disabled={!requestText.trim()}><Icon name="plus" size={16}/> Create request & playlist</button>
        </form></div>}
        {newGroupOpen && <div className="modal-backdrop" onClick={() => setNewGroupOpen(false)}><form className="request-modal" onClick={e => e.stopPropagation()} onSubmit={e => {e.preventDefault(); createGroup()}}><div className="modal-heading"><h2>Create a music group</h2><button type="button" onClick={() => setNewGroupOpen(false)}><Icon name="close"/></button></div><p>Create a space where friends can request and contribute to playlists.</p><label>Group name<input required value={newGroupName} onChange={e => setNewGroupName(e.target.value)} placeholder="e.g. Friday Night Crew"/></label><button type="submit" className="primary-cta">Create group</button></form></div>}

        {activePage === 'saved' && (
          <div className="page-scroll">
            <section className="saved-page">
              <div className="saved-header">
                <div className="saved-art"><Icon name="heart" size={32} /></div>
                <div><span className="eyebrow">Your collection</span><h1>Saved discoveries</h1><p>{saved.length} songs you want to hear again, gathered across every space.</p></div>
                {saved.length > 0 && <button className="primary-cta" onClick={() => { setActiveTrack(saved[0]); setPlaying(true) }}><Icon name="play" size={16} /> Play all</button>}
              </div>

              <div className="saved-toolbar">
                <div><button className="active">All songs</button><button>Recently saved</button></div>
                <span><Icon name="clock" size={14} /> Newest first</span>
              </div>

              {saved.length > 0 ? (
                <div className="saved-list">
                  <div className="saved-list-labels"><span>#</span><span>Title</span><span>Source</span><span>Space</span><span>Length</span><span /></div>
                  {saved.map((index, rowIndex) => {
                    const track = tracks[index]
                    return (
                      <div className="saved-row" key={track.title}>
                        <button className="saved-index" onClick={() => { setActiveTrack(index); setPlaying(true) }}><span>{rowIndex + 1}</span><Icon name="play" size={14} /></button>
                        <div className="saved-song"><img src={track.image} alt="" /><div><strong>{track.title}</strong><span>{track.artist} · {track.album}</span></div></div>
                        <span className={`row-source ${track.sourceType}`}><Icon name={track.sourceType === 'friend' ? 'users' : 'sparkles'} size={12} /> {track.source}</span>
                        <span className="saved-space"><i style={{ background: spaces[index % spaces.length].color }} />{spaces[index % spaces.length].name}</span>
                        <span className="duration">{track.duration}</span>
                        <div className="saved-actions"><button aria-label="Remove from saved" onClick={() => setSaved(saved.filter((item) => item !== index))}><Icon name="heart" size={17} className="filled-heart" /></button><button aria-label="More options"><Icon name="more" size={18} /></button></div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="empty-saved">
                  <div><Icon name="heart" size={27} /></div>
                  <h2>Save something worth returning to</h2>
                  <p>Tap the heart on any discovery and it’ll appear here.</p>
                  <button className="primary-cta" onClick={() => setActivePage('home')}>Browse spaces <Icon name="arrow" size={15} /></button>
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      <footer className="bottom-player">
        <div className="bottom-track"><img src={current.image} alt="" /><div><strong>{current.title}</strong><span>{current.artist}</span></div><button onClick={() => setSaved(saved.includes(activeTrack) ? saved.filter((item) => item !== activeTrack) : [...saved, activeTrack])}><Icon name="heart" size={17} /></button></div>
        <div className="bottom-controls"><button><Icon name="skip" className="reverse" size={16} /></button><button className="mini-play" onClick={() => setPlaying(!playing)}><Icon name={playing ? 'pause' : 'play'} size={16} /></button><button><Icon name="skip" size={16} /></button></div>
        <div className="volume"><Icon name="volume" size={17} /><span><i /></span></div>
      </footer>
    </div>
  )
}

export default App
