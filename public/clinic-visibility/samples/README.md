# Media for this landing page

Drop the compressed 9:16 loop videos + before image here (see the landing-page skill):
- reel1.mp4 … reel8.mp4   (gallery filmstrip)
- feat-ugc.mp4, feat-listing.mp4   (feature rows)
- ba-before.jpg   (before/after "before" image)
- reel6.mp4 doubles as the before/after "after" video

Use scripts/fetch-videos.sh from the skill to pull Drive links + compress with ffmpeg
(540x960, ~9s, ≤2.6MB each; blur-pad landscape, native portrait).
Filenames must match content.jsx media paths.
