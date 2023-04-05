import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Profile.module.css'

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John Doe | Next.js Profile Page</title>
        <meta name="description" content="John Doe's profile page built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            <Image
              src="/profile-pic.jpg"
              alt="Picture of John Doe"
              width={200}
              height={200}
              className={styles.profilePhotoImage}
            />
          </div>
          <div className={styles.profileInfo}>
            <h1 className={styles.profileInfoName}>John Doe</h1>
            <p className={styles.profileInfoBio}>
              Student
            </p>
          </div>
        </div>
        <div className={styles.about}>
          <h3>Email:</h3>
          <p>samplemail@gmail.com</p>
          <h3>PhoneNumber:</h3>
          <p>+91 52627829</p>
        </div>
      </main>
    </div>
  )
}
