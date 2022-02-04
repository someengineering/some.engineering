import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

type Person = {
  name: string;
  githubUsername: string;
};

const TeamMembers: Person[] = [
  {
    name: 'Lukas Lösche',
    githubUsername: 'lloesche',
  },
  {
    name: 'Lars Kamp',
    githubUsername: 'scapecast',
  },
  {
    name: 'Matthias Veit',
    githubUsername: 'aquamatthias',
  },
  {
    name: 'Raffaele Picca',
    githubUsername: 'RPicster',
  },
  {
    name: 'Doris Houng',
    githubUsername: 'TheCatLady',
  },
  {
    name: 'Nikita Melkozerov',
    githubUsername: 'meln1k',
  },
];

function TeamMember({ name, githubUsername }: Person) {
  return (
    <a
      href={`https://github.com/${githubUsername}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.teamMember}
    >
      <div className={styles.avatar}>
        <img
          className={styles.avatarImage}
          alt={name}
          src={`https://github.com/${githubUsername}.png`}
        />
      </div>
    </a>
  );
}

export default function TeamList({
  isHomePage = false,
}: {
  isHomePage: boolean;
}): JSX.Element {
  return isHomePage ? (
    <section className="section sectionAlt">
      <div className="container">
        <h2 className={clsx('sectionTitle', styles.meetTheTeam)}>
          Meet the Team
        </h2>
        <div className={clsx(styles.teamList, styles.homepage)}>
          {TeamMembers.map((props, idx) => (
            <TeamMember key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <div className={styles.teamList}>
      {TeamMembers.map((props, idx) => (
        <TeamMember key={idx} {...props} />
      ))}
    </div>
  );
}
