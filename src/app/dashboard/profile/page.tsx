import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { ProfileInfo } from "@/components/profile/profile-info";
import { UpdateProfileForm } from "@/components/profile/profile-details-form";
import styles from "./../../../styles/pages/profile.module.css";
import { ChangePasswordForm } from "@/components/profile/change-password-form";

export const metadata = { title: `Perfil | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <div className={styles.profile_form_container}>
            <Card>
                <div className={styles.profile_data_container}>
                    <CardHeader title="Datos" />
                </div>
                <div className={styles.update}>
                    <CardContent >
                        <ProfileInfo />
                    </CardContent>
                    <CardContent>
                        <UpdateProfileForm />
                    </CardContent>
                </div>
            </Card>
            <Card>
                <div className={styles.profile_data_container}>
                    <CardHeader title="Cambiar contraseña" />
                </div>
                <div className={styles.update}>
                    <ChangePasswordForm />
                </div>
            </Card>
        </div>
    )
}