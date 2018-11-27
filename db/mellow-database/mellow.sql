INSERT INTO rooms (type, title, url, description) VALUES
(
  'Bedroom',
  'Your Optimized Layout',
  'https://i.imgur.com/BtBmXB3.png',
  'This is how your items fit best in your 135 square-foot U-shaped room.'
);

INSERT INTO furniture (room, couch_name, couch_url, bed_name, bed_url, table_name, table_url, cabinet_name, cabinet_url, rug_name, rug_url, tv_name, tv_url, rooms_id) VALUES
(
  'Bedroom',
  'Couch',
  'https://i.imgur.com/c5W0zAX.png',
  'Bed',
  'https://i.imgur.com/m3NDjpZ.png',
  'Table',
  'https://i.imgur.com/VPjTigf.png',
  'Dresser',
  'https://i.imgur.com/fkmp28u.png',
  'Rug',
  'https://i.imgur.com/tGb0Q1a.png',
  'Television',
  'https://i.imgur.com/CkqPcin.png',
  1
);


INSERT INTO explore (name, location, profile_url, url, title, size, description) VALUES
(
  'Deborah Clark',
  'Manhattan',
  'https://i.imgur.com/YsKVAh4.jpg',
  'https://i.imgur.com/8Vq1hHP.jpg',
  'Organized Living Dream',
  '50 Sq.Ft.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
),
(
  'Morgan Rockwell',
  'Brooklyn',
  'https://i.imgur.com/4Ys763V.jpg',
  'https://i.imgur.com/NgkAGZc.jpg',
  'Organized Living Dream',
  '50 Sq.Ft.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
),
(
  'Meghan Lourdes',
  'Greater Boston',
  'https://i.imgur.com/HRBCgtR.jpg',
  'https://i.imgur.com/1J6Laa0.jpg',
  'Organized Living Dream',
  '50 Sq.Ft.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
),
(
  'Layla Clapton',
  'Long Island',
  'https://i.imgur.com/gsLgACg.jpg',
  'https://i.imgur.com/kVCyg0I.jpg',
  'Organized Living Dream',
  '50 Sq.Ft.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
),
(
  'Paula Benning',
  'Greater Los Angeles',
  'https://i.imgur.com/kcJd7Aj.jpg',
  'https://www.livingspaces.com/globalassets/images/inspiration/modern_livingroom_110217_1.jpg',
  'Organized Living Dream',
  '50 Sq.Ft.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
),
(
  'Grace Kalimba',
  'Greater Sacramento',
  'https://i.imgur.com/cPZtse3.jpg',
  'https://i.imgur.com/7hjFNbE.jpg',
  'Organized Living Dream',
  '50 Sq.Ft.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
)
;

INSERT INTO furniture_list (name, url) VALUES
(
  'Couch',
  'https://i.imgur.com/c5W0zAX.png'
),
(
  'Bed',
  'https://i.imgur.com/m3NDjpZ.png'
),
(
  'Table',
  'https://i.imgur.com/VPjTigf.png'
),
(
  'Cabinet',
  'https://i.imgur.com/fkmp28u.png'
),
(
  'Rug',
  'https://i.imgur.com/tGb0Q1a.png'
),
(
  'Television',
  'https://i.imgur.com/CkqPcin.png'
);
