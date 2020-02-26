module.exports = [
  /**
   * Guides
   */
  // Get started
  {
    cat: 'Guides',
    group: 'Get started',
    doc: 'Quick start'
  },
  {
    cat: 'Guides',
    group: 'Get started',
    doc: 'Detailed setup',
    sections: [
      'Install Architect',
      'Example project',
      'Work locally',
      'Get AWS IAM credentials',
      'Configure AWS CLI',
      'Deploying',
      'Clean Up',
    ]
  },
  {
    cat: 'Guides',
    group: 'Get started',
    doc: 'Going beyond "Hello World"',
    sections: [
      'Static assets & CDNs',
      'Database tables',
      'Environment variables',
      'CI / CD',
      'Event functions',
      'Scheduled Functions',
      'Queue functions',
      'Macros',
    ]
  },
  {
    cat: 'Guides',
    group: 'Get started',
    doc: 'Meet your new superpowers',
    sections: [
      'Speed',
      'Security',
      'Developer experience',
      'Framework comparison',
    ]
  },
  {
    cat: 'Guides',
    group: 'Get started',
    doc: 'Upgrade guides',
    sections: [
      '5.x to 6.x',
      '4.x to 5.x',
    ]
  },

  // Tutorials
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Developing with cloud functions',
    sections: [
      'Overview',
      'Principles & best practices',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Working locally / offline',
    sections: [
      'Overview',
      'Previewing vs. testing',
      'Sandbox init scripts',
      'HTTP testing',
      'DB testing',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Code sharing across functions',
    sections: [
      'Overview',
      'Principles & best practices',
      'src/shared',
      'src/views',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Cloud function middleware',
    sections: [
      'Overview',
      'How (and why) to use middleware',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Working locally / offline',
    sections: [
      'Overview',
      'Previewing vs. testing',
      'Sandbox init scripts',
      'HTTP testing',
      'DB testing',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Single page apps',
    sections: [
      'Overview',
      'Aliasing',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'HTTP & WebSocket sessions',
    sections: [
      'Overview',
      'HTTP sessions',
      'WebSocket sessions',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Modeling & persisting data',
    sections: [
      'Overview',
      'TBD',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Background tasks',
    sections: [
      'Overview',
      'TBD',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Implementing CORS',
    sections: [
      'Overview',
      'TBD',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Logging & monitoring your app',
    sections: [
      'Overview',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Assigning a domain name to your app',
    sections: [
      'Overview',
      'Setup',
      'DNS with 3rd party provider',
      'DNS with Route53',
      'TBD',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Adding WebSockets to your app',
    sections: [
      'Overview',
      'Connecting to your WebSocket',
      'Implementing sessions',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Using dependencies in your functions',
    sections: [
      'Overview',
      'Updating dependencies',
      'Hydrating dependencies',
    ]
  },
  {
    cat: 'Guides',
    group: 'Tutorials',
    doc: 'Extending Architect with macros',
    sections: [
      'Overview',
      'TBD',
    ]
  },

  // AWS
  {
    cat: 'Guides',
    group: 'AWS',
    doc: 'Configuration',
    sections: [
      'Deploy buckets',
      'Default runtime',
    ]
  },
  {
    cat: 'Guides',
    group: 'AWS',
    doc: 'AWS credentials',
    sections: [
      'Minimum viable permissions',
      'Working with multiple profiles',
      'Credentials file vs. environment variables',
    ]
  },
  {
    cat: 'Guides',
    group: 'AWS',
    doc: 'Custom IAM roles',
    sections: [
      'Overview',
    ]
  },

  /**
   * Reference
   */
  // Project manifest
  {
    cat: 'Reference',
    doc: 'Architect project structure',
    sections: [
      'Overview',
      'Creating new resources & files',
      'Special files & folders',
    ]
  },

  // Architect manifest & config
  {
    cat: 'Reference',
    group: 'Architect manifest & config',
    doc: 'Project manifest & config',
    sections: [
      '.arc',
      'JSON',
      'YAML',
      'TOML',
    ]
  },
  {
    cat: 'Reference',
    group: 'Architect manifest & config',
    doc: 'Function config file',
    sections: [
      'Overview',
      'Concurrency',
      'Layers',
      'Memory',
      'Policies',
      'Runtime',
      'Timeout',
    ]
  },
  {
    cat: 'Reference',
    group: 'Architect manifest & config',
    doc: 'Environment file',
    sections: [
      'Environments',
      '.env',
      '.arc-env',
    ]
  },
  {
    cat: 'Reference',
    group: 'Architect manifest & config',
    doc: 'Playground',
  },

  // Static assets
  {
    cat: 'Reference',
    group: 'Static assets',
    doc: 'Static',
    sections: [
      'Overview',
      'Fingerprint',
      'Folder',
      'Ignore',
      'Serialize',
      'Staging',
      'Production',
    ]
  },
  {
    cat: 'Reference',
    group: 'Static assets',
    doc: 'CDN',
    sections: [
      'Overview',
      'Best practices',
      'Cache invalidation',
    ]
  },

  // Functions
  {
    cat: 'Reference',
    group: 'Functions',
    doc: 'HTTP functions',
    sections: [
      'Overview',
      'Getting started',
      'Requests',
      'Responses',
      'Anti-caching headers',
      'Examples',
    ]
  },
  {
    cat: 'Reference',
    group: 'Functions',
    doc: 'Database functions',
    sections: [
      'Overview',
      'Getting started',
      'Events',
      'Examples',
    ]
  },
  {
    cat: 'Reference',
    group: 'Functions',
    doc: 'Scheduled functions',
    sections: [
      'Overview',
      'Getting started',
      'Events',
      'Examples',
    ]
  },
  {
    cat: 'Reference',
    group: 'Functions',
    doc: 'Event functions',
    sections: [
      'Overview',
      'Getting started',
      'Events',
      'Examples',
    ]
  },
  {
    cat: 'Reference',
    group: 'Functions',
    doc: 'Queue functions',
    sections: [
      'Overview',
      'Getting started',
      'Events',
      'Examples',
    ]
  },
  {
    cat: 'Reference',
    group: 'Functions',
    doc: 'WebSocket functions',
    sections: [
      'Overview',
      'Getting started',
      'Events',
      'Examples',
    ]
  },

  // Database
  {
    cat: 'Reference',
    group: 'Database',
    doc: 'Tables',
    sections: [
      'Overview',
      'Getting started',
      'Examples',
    ]
  },
  {
    cat: 'Reference',
    group: 'Database',
    doc: 'Indexes',
    sections: [
      'Overview',
      'Getting started',
      'Examples',
    ]
  },

  // Domains (coming soon)
  // {
  //   cat: 'Reference',
  //   doc: 'Domains',
  // },

  // Macros
  {
    cat: 'Reference',
    doc: 'Macros',
    sections: [
      'Overview',
      'Getting started',
      'Examples',
    ]
  },

  // CLI reference
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'deploy',
    sections: [
      'Usage',
      'Flags',
    ]
  },
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'env',
    sections: [
      'Usage',
      'Flags',
    ]
  },
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'hydrate',
    sections: [
      'Usage',
      'Flags',
    ]
  },
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'init',
    sections: [
      'Usage',
      'Flags',
    ]
  },
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'logs',
    sections: [
      'Usage',
      'Flags',
    ]
  },
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'package',
    sections: [
      'Usage',
      'Flags',
    ]
  },
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'repl',
    sections: [
      'Usage',
      'Flags',
    ]
  },
  {
    cat: 'Reference',
    group: 'CLI reference',
    doc: 'sandbox',
    sections: [
      'Usage',
      'Flags',
      'Init scripts',
    ]
  },

  // @architect/functions runtime helper reference
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.events',
    sections: [
      'Overview',
      'Publish',
      'Subscribe',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.http',
    sections: [
      'Overview',
      'Getting started',
      'Requests',
      'Responses',
      'Middleware',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.http.async',
    sections: [
      'Overview',
      'Getting started',
      'Requests',
      'Responses',
      'Middleware',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.http.helpers',
    sections: [
      'Body parser',
      'URL',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.http.proxy',
    sections: [
      'Overview',
      'Bucket',
      'SPA',
      'Folder',
      'Reading static assets',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.http.session',
    sections: [
      'Overview',
      'Database vs. JWE',
      'Session domain',
      'Table name',
      'Secret',
      'Reading sessions',
      'Writing sessions',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.queues',
    sections: [
      'Overview',
      'Publish',
      'Subscribe',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.static',
    sections: [
      'Overview',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.tables',
    sections: [
      'Overview',
      'get',
      'query',
      'scan',
      'put',
      'delete',
      'update',
      'data._db',
      'data._doc',
      'data._name',
    ]
  },
  {
    cat: 'Reference',
    group: 'Runtime helper reference',
    doc: 'arc.ws',
    sections: [
      'Overview',
      'Send messages',
    ]
  },


  /**
   * About
   */
  {
    cat: 'About',
    doc: 'Mission',
  },
  {
    cat: 'About',
    doc: 'Governance',
  },
  {
    cat: 'About',
    doc: 'Community',
  },
  {
    cat: 'About',
    doc: 'Contributor guide',
  },
  {
    cat: 'About',
    doc: 'Help wanted',
  },
  // {
  //   cat: '',
  //   group: '',
  //   doc: '',
  //   sections: [
  //     '',
  //   ]
  // },
]
