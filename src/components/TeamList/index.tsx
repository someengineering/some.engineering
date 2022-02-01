import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

type Person = {
  name: string;
  githubUsername: string;
  titles: string[];
};

const TeamMembers: Person[] = [
  {
    name: 'Lukas Lösche',
    githubUsername: 'lloesche',
    titles: ['Co-Founder', 'Some Engineer'],
  },
  {
    name: 'Lars Kamp',
    githubUsername: 'scapecast',
    titles: ['Co-Founder', 'Some CEO'],
  },
  {
    name: 'Matthias Veit',
    githubUsername: 'aquamatthias',
    titles: ['Co-Founder', 'Some Engineer'],
  },
  {
    name: 'Raffaele Picca',
    githubUsername: 'RPicster',
    titles: ['Co-Founder', 'Some Designer'],
  },
  {
    name: 'Doris Houng',
    githubUsername: 'TheCatLady',
    titles: ['Some Developer Experience Engineer'],
  },
  {
    name: 'Nikita Melkozerov',
    githubUsername: 'meln1k',
    titles: ['Some Engineer'],
  },
];

function TeamMember({ name, githubUsername, titles }: Person) {
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
      <div className="text--center padding-horiz--md">
        <div className={styles.name}>{name}</div>
        <div className={styles.title}>
          {titles
            .map((title) => <>{title}</>)
            .reduce((prev, curr) => (
              <>
                {prev} &amp;
                <br />
                {curr}
              </>
            ))}
        </div>
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
