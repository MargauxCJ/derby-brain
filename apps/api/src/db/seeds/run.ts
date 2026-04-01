import { DataSource } from 'typeorm';
import { MemberPosition, UserRole } from '@derby-brain/shared-utils';
import { Club, Member, Team, User } from '@derby-brain/api-lib';

export const runSeeder = async (dataSource: DataSource) => {
  const clubRepo = dataSource.getRepository(Club);
  const userRepo = dataSource.getRepository(User);
  const teamRepo = dataSource.getRepository(Team);
  const memberRepo = dataSource.getRepository(Member);

  console.log('--- Cleaning database ---');
  await dataSource.query('TRUNCATE TABLE clubs RESTART IDENTITY CASCADE');
  await dataSource.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');

  console.log('--- Seeding started ---');

  const club = await clubRepo.save(
    clubRepo.create({
      name: 'RDC Caen',
      city: 'Caen',
      description: 'Le club de Roller Derby de Caen',
    }),
  );
  console.log(`Club created: ${club.name}`);

  const admin = await userRepo.save(
    userRepo.create({
      surname: 'Praline',
      email: 'admin@rdc.fr',
      password: 'password',
      clubId: club.id,
      role: UserRole.ADMIN,
    }),
  );
  console.log(`Admin created: ${admin.email}`);

  const leopards = await teamRepo.save(
    teamRepo.create({ name: 'Les Léopards Avengers', clubId: club.id }),
  );
  const petroleuses = await teamRepo.save(
    teamRepo.create({ name: 'Les Pétroleuses', clubId: club.id }),
  );
  console.log('Teams created');

  const createTeamPlayers = async (team: Team, prefix: string) => {
    const roles = [
      MemberPosition.JAMMER,
      MemberPosition.PIVOT,
      MemberPosition.BLOCKER,
      MemberPosition.BLOCKER,
      MemberPosition.BLOCKER,
    ];

    for (let i = 0; i < 5; i++) {
      const user = await userRepo.save(
        userRepo.create({
          surname: `Player ${i + 1}`,
          email: `${prefix.toLowerCase()}${i + 1}@rdc.fr`,
          password: 'password123',
          clubId: club.id,
          role: UserRole.MEMBER,
        }),
      );

      await memberRepo.save(
        memberRepo.create({
          userId: user.id,
          teamId: team.id,
          surname: `${prefix} Force ${i + 1}`,
          number: (i + 10).toString(),
          defaultPosition: roles[i],
        }),
      );
    }
  };

  await createTeamPlayers(leopards, 'Leopard');
  await createTeamPlayers(petroleuses, 'Petrole');

  console.log('--- Seeding finished successfully ---');
};

