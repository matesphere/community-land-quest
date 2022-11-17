import { useContext, FC } from 'react'
import { Button } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { Link } from 'gatsby'

import { UserStateContext } from '@community-land-quest/shared-data/contexts/user-state'

import Squiggle from '../../assets/squiggle.svg'

export const Footer: FC = () => {
    const {
        userInfo: { role },
    } = useContext(UserStateContext)
    return (
        <footer className="footer">
            <Squiggle className="squiggle" />
            <section className="container">
                <div className="row">
                    <div className="col-lg-4 mt-1">
                        <p>
                            <Link to="/student/team-hub/">Team hub</Link>
                            <br />
                            <Link to="/acknowledgements">
                                Creators and Acknowledgements
                            </Link>
                            {role !== 'student' && (
                                <>
                                    <br />
                                    <Link to="/tutor/hub">Tutor Hub</Link>
                                </>
                            )}
                        </p>
                    </div>
                    <div className="col-lg-4 mt-1"></div>
                    <div className="col-lg-4">
                        <Button
                            onClick={async () => {
                                try {
                                    await Auth.signOut()
                                } catch (error) {
                                    console.log('error signing out: ', error)
                                }
                            }}
                        >
                            SIGN OUT
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-align-center mt-2">
                        <p>
                            &copy; Copyright MateSphere 2021. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
